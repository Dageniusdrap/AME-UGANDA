'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { requireAuth, requireRole } from '@/lib/auth';

export async function createPost(formData: FormData) {
    try {
        await requireRole(['ADMIN', 'MODERATOR']);

        const user = await requireAuth();

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const excerpt = formData.get('excerpt') as string;
        const category = formData.get('category') as any;
        const published = formData.get('published') === 'true';

        // Generate slug from title
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        const post = await db.post.create({
            data: {
                title,
                slug,
                content,
                excerpt,
                category,
                published,
                publishedAt: published ? new Date() : null,
                authorId: user.id,
            },
        });

        revalidatePath('/news');
        revalidatePath('/admin/posts');

        return { success: true, data: post };
    } catch (error: any) {
        console.error('Error creating post:', error);
        return { success: false, error: error.message };
    }
}

export async function getPublishedPosts(category?: string) {
    try {
        const posts = await db.post.findMany({
            where: {
                published: true,
                ...(category && { category: category as any }),
            },
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                    },
                },
            },
            orderBy: { publishedAt: 'desc' },
            take: 10,
        });

        return { success: true, data: posts };
    } catch (error: any) {
        console.error('Error fetching posts:', error);
        return { success: false, error: error.message };
    }
}

export async function getPostBySlug(slug: string) {
    try {
        const post = await db.post.findUnique({
            where: { slug },
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                    },
                },
                comments: {
                    where: { approved: true },
                    include: {
                        author: {
                            select: {
                                firstName: true,
                                lastName: true,
                                profileImage: true,
                            },
                        },
                    },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (post) {
            // Increment view count
            await db.post.update({
                where: { id: post.id },
                data: { views: { increment: 1 } },
            });
        }

        return { success: true, data: post };
    } catch (error: any) {
        console.error('Error fetching post:', error);
        return { success: false, error: error.message };
    }
}
