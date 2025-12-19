'use server';

import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
});

export async function createMembershipPayment(membershipType: string) {
    try {
        const user = await requireAuth();

        const member = await db.member.findUnique({
            where: { userId: user.id },
        });

        if (!member) {
            return { success: false, error: 'Member profile not found' };
        }

        // Determine amount based on membership type
        const amounts: Record<string, number> = {
            STUDENT: 50000,
            REGULAR: 150000,
            SENIOR: 100000,
        };

        const amount = amounts[membershipType] || 150000;

        // Create payment record
        const payment = await db.payment.create({
            data: {
                memberId: member.id,
                amount,
                currency: 'UGX',
                paymentType: 'MEMBERSHIP_FEE',
                status: 'PENDING',
            },
        });

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'ugx',
                        product_data: {
                            name: `${membershipType} Membership`,
                            description: 'AME Uganda Annual Membership Fee',
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/membership?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/membership?canceled=true`,
            metadata: {
                paymentId: payment.id,
                memberId: member.id,
            },
        });

        return { success: true, data: { sessionId: session.id, url: session.url } };
    } catch (error: any) {
        console.error('Error creating payment:', error);
        return { success: false, error: error.message };
    }
}
