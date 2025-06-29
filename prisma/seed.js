const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const existingRoles = await prisma.role.findMany();
    if (existingRoles.length === 0) {
        await prisma.role.createMany({
            data: [
                { label: 'super-admin' },
                { label: 'admin' },
                { label: 'user' },
            ],
        });
        console.log('✅ Roles seeded');
    } else {
        console.log('ℹ️ Roles already exist, skipping');
    }

    const roles = await prisma.role.findMany();

    const existingUsers = await prisma.user.findMany();
    if (existingUsers.length === 0) {
        await prisma.user.createMany({
            data: [
                {
                    lastname: 'Doe',
                    firstname: 'John',
                    email: 'john.doe@example.com',
                    password: '$2b$10$.tLd5jVIevXlDaHxPura0u1NNUB5OgLIw7QEDTJZlR9jy345pLTJe', // bcrypt hash
                    roleId: roles.find(r => r.label === 'admin')?.id,
                },
                {
                    lastname: 'Smith',
                    firstname: 'Jane',
                    email: 'jane.smith@example.com',
                    password: '$2b$10$.tLd5jVIevXlDaHxPura0u1NNUB5OgLIw7QEDTJZlR9jy345pLTJe',
                    roleId: roles.find(r => r.label === 'user')?.id,
                },
            ],
        });
        console.log('✅ Users seeded');
    } else {
        console.log('ℹ️ Users already exist, skipping');
    }

    const existingHomePage = await prisma.page.findUnique({ where: { slug: 'accueil' } });

    if (!existingHomePage) {
        await prisma.page.create({
                data: {
                    title: 'Accueil',
                    slug: 'accueil',
                    content: {
                        create: [
                            {
                                type: 'text',
                                content: '<h2>Bienvenue sur CesiZen</h2><p>Votre espace de bien-être et d’écoute pour une vie étudiante plus équilibrée.</p>',
                                order: 1,
                            },
                            {
                                type: 'image',
                                content: 'https://source.unsplash.com/800x400/?meditation,wellness',
                                order: 2,
                            },
                            {
                                type: 'text',
                                content: '<p>Explorez nos outils et ressources pour mieux gérer votre stress au quotidien.</p>',
                                order: 3,
                            },
                        ],
                    },
                },
            include: {
                content: true,
            },
        });
        console.log('✅ Page "Accueil" seeded');
    } else {
        console.log('ℹ️ Page "Accueil" already exists, skipping');
    }

    const existingAboutPage = await prisma.page.findUnique({ where: { slug: 'a-propos' } });

    if (!existingAboutPage) {
        await prisma.page.create({
            data: {
                title: 'À propos',
                slug: 'a-propos',
                content: {
                    create: [
                        {
                            type: 'text',
                            content: '<h2>Notre mission</h2><p>Améliorer le bien-être des étudiants grâce à une meilleure gestion du stress.</p>',
                            order: 1,
                        },
                        {
                            type: 'image',
                            content: '/images/team.jpg',
                            order: 2,
                        },
                        {
                            type: 'text',
                            content: '<p>Nous sommes une équipe passionnée réunie autour de la santé mentale.</p>',
                            order: 3,
                        },
                        {
                            type: 'video',
                            content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                            order: 4,
                        },
                    ],
                },
            },
            include: {
                content: true,
            },
        });
        console.log('✅ Page "À propos" seeded');
    } else {
        console.log('ℹ️ Pages already exist, skipping');
    }
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
