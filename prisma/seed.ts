import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create admin user (replace with your Clerk user ID)
    // WARNING: Ideally this should skip if user exists, or upsert.
    // The provided code uses upsert.
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@ameuganda.org' }, // Assuming email is unique in schema
        update: {},
        create: {
            clerkId: 'user_xxxxx', // Replace with actual Clerk ID
            email: 'admin@ameuganda.org',
            firstName: 'Admin',
            lastName: 'User',
            role: 'ADMIN',
        },
    });

    // Create sample posts
    await prisma.post.createMany({
        data: [
            {
                title: 'Welcome to AME Uganda',
                slug: 'welcome-to-ame-uganda',
                content: 'Welcome to the official website...',
                excerpt: 'We are excited to launch our new website',
                category: 'ANNOUNCEMENT',
                published: true,
                publishedAt: new Date(),
                authorId: adminUser.id,
            },
            {
                title: 'New CAA Regulations',
                slug: 'new-caa-regulations',
                content: 'The Civil Aviation Authority has announced...',
                excerpt: 'Important updates on licensing requirements',
                category: 'REGULATORY',
                published: true,
                publishedAt: new Date(),
                authorId: adminUser.id,
            },
        ],
        skipDuplicates: true,
    });

    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
