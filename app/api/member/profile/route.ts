import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const member = await db.member.findUnique({
            where: { userId },
        });

        if (!member) {
            return new NextResponse('Member not found', { status: 404 });
        }

        return NextResponse.json(member);
    } catch (error) {
        console.error('[MEMBER_PROFILE_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
