const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const aboutPageContent = [
    {
        type: 'text',
        content: `
      <section class="text-center">
        <p class="text-lg text-gray-600">
          Une plateforme pour mieux comprendre et gérer votre santé mentale au quotidien.
        </p>
      </section>
    `,
        order: 1,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">Notre mission</h2>
        <p class="text-gray-700">
          CesiZen est une initiative du ministère de la Santé et de la Prévention. Elle vise à proposer au
          grand public un accès simplifié à des outils interactifs de prévention en santé mentale,
          centrés notamment sur la gestion du stress.
        </p>
        <p class="text-gray-700">
          L’objectif est d’aider chacun à comprendre son état émotionnel, à travers des contenus fiables,
          des diagnostics personnalisés et des activités de relaxation accessibles.
        </p>
      </section>
    `,
        order: 2,
    },
    {
        type: 'image',
        content: '/images/a-propos-1.jpg',
        order: 3,
    },
    {
        type: 'text',
        content: `
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">Fonctionnalités clés</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-1">
        <li>Informations validées par des experts en santé mentale</li>
        <li>Diagnostics interactifs basés sur l’échelle de Holmes et Rahe</li>
        <li>Exercices de relaxation guidés</li>
        <li>Suivi émotionnel avec un tracker intégré</li>
        <li>Activités de détente à explorer</li>
      </ul>
    </section>
    `,
        order: 4,
    },
    {
        type: 'image',
        content: '/images/a-propos-2.png',
        order: 5,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">Sécurité et confidentialité</h2>
        <p class="text-gray-700">
          CesiZen respecte les normes du RGPD. Aucune donnée médicale n’est partagée ou exploitée.
          L'utilisateur garde le contrôle total de ses informations.
        </p>
      </section>
    `,
        order: 6,
    },
    {
        type: 'text',
        content: `
      <section class="text-center pt-8">
        <p class="text-gray-600">
          Merci de faire partie de la communauté <span class="font-semibold text-blue-600">CesiZen</span> 💙
        </p>
      </section>
    `,
        order: 7,
    },
];


async function main() {
    const existingRoles = await prisma.role.findMany();
    if (existingRoles.length === 0) {
        await prisma.role.createMany({
            data: [
                {label: 'super-admin'},
                {label: 'admin'},
                {label: 'user'},
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

    const existingAboutPage = await prisma.page.findUnique({where: {slug: 'a-propos'}});

    if (!existingAboutPage) {
        await prisma.page.create({
            data: {
                title: 'À propos de CesiZen',
                slug: 'a-propos',
                content: {
                    create: aboutPageContent,
                },
            },
            include: {
                content: true,
            },
        });
        console.log('✅ Page "À propos" seeded');
    } else {
        console.log('ℹ️ Page "À propos" already exists, skipping');
    }


    const existingMenuItems = await prisma.menuItem.findMany();
    if (existingMenuItems.length === 0) {
        await prisma.menuItem.createMany({
            data: [
                {label: 'À propos', slug: 'a-propos', order: 3, isPublic: true, requiredRole: null},
            ],
        });

        console.log('✅ MenuItems seeded');
    } else {
        console.log('ℹ️ MenuItems already exist, skipping');
    }
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
