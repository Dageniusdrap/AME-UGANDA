import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { UserRole } from '@prisma/client';

export async function getCurrentUser() {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const user = await db.user.findUnique({
        where: { clerkId: userId },
        include: { member: true },
    });

    return user;
}

export async function requireAuth() {
    const user = await getCurrentUser();

    if (!user) {
        throw new Error('Unauthorized');
    }

    return user;
}

export async function requireRole(allowedRoles: UserRole[]) {
    const user = await requireAuth();

    if (!allowedRoles.includes(user.role)) {
        throw new Error('Forbidden: Insufficient permissions');
    }

    return user;
}

// Usage in Server Actions
export async function deletePost(postId: string) {
    // Only admins and moderators can delete posts
    await requireRole(['ADMIN', 'MODERATOR']);

    await db.post.delete({
        where: { id: postId },
    });

    return { success: true };
}
