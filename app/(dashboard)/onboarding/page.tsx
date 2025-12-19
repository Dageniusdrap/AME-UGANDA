import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { MemberOnboardingForm } from '@/components/forms/member-onboarding-form';

export default async function OnboardingPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in');
    }

    // Check if user already has a member profile
    const existingMember = await db.user.findUnique({
        where: { clerkId: user.id },
        include: { member: true },
    });

    if (existingMember?.member) {
        redirect('/dashboard');
    }

    return (
        <div className="container mx-auto max-w-2xl py-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Welcome to Aviation Engineers Uganda!</h1>
                <p className="text-gray-600 mt-2">
                    Let's set up your professional profile
                </p>
            </div>

            <MemberOnboardingForm userId={user.id} />
        </div>
    );
}
