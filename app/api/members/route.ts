import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        // Check if user has admin role
        const user = await db.user.findUnique({
            where: { clerkId: userId },
        });

        if (user?.role !== 'ADMIN') {
            return new NextResponse('Forbidden', { status: 403 });
        }

        // Fetch all members
        const members = await db.member.findMany({
            include: {
                user: {
                    select: {
                        email: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(members);
    } catch (error) {
        console.error('[MEMBERS_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
