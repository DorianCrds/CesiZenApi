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

const healthLifestylePageContent = [
    {
        type: 'text',
        content: `
      <section class="text-center">
        <p class="text-lg text-gray-600">
          Améliorer sa santé mentale grâce à une hygiène de vie équilibrée.
        </p>
      </section>
    `,
        order: 1,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">L'importance de l'équilibre quotidien</h2>
        <p class="text-gray-700">
          Le bien-être mental ne dépend pas uniquement de facteurs psychologiques. Il est étroitement lié
          à nos habitudes de vie : ce que nous mangeons, la qualité de notre sommeil, notre niveau
          d'activité physique... Tout est connecté.
        </p>
        <p class="text-gray-700">
          Une bonne hygiène de vie favorise la résilience face au stress, améliore la concentration
          et aide à stabiliser l'humeur.
        </p>
      </section>
    `,
        order: 2,
    },
    {
        type: 'image',
        content: '/images/sante-1.png', // emplacement image 1
        order: 3,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">Alimentation et santé mentale</h2>
        <p class="text-gray-700">
          Une alimentation variée et équilibrée joue un rôle crucial dans le bon fonctionnement du cerveau.
          Les nutriments comme les oméga-3, les vitamines B ou encore le magnésium participent à la
          régulation de l'humeur et à la réduction de l'anxiété.
        </p>
        <p class="text-gray-700">
          À l'inverse, une consommation excessive de sucre, de graisses saturées ou d'aliments ultra-transformés
          peut affecter négativement notre bien-être psychique.
        </p>
      </section>
    `,
        order: 4,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">Sommeil réparateur</h2>
        <p class="text-gray-700">
          Un sommeil de qualité est essentiel pour gérer ses émotions, maintenir une bonne mémoire
          et se sentir en forme. Le manque de sommeil chronique augmente les risques de troubles de l'humeur,
          comme la dépression ou l'irritabilité.
        </p>
        <p class="text-gray-700">
          Se coucher à heures régulières, limiter les écrans avant de dormir et favoriser un environnement calme
          sont des gestes simples mais efficaces.
        </p>
      </section>
    `,
        order: 5,
    },
    {
        type: 'image',
        content: '/images/sante-2.jpg', // emplacement image 2
        order: 6,
    },
    {
        type: 'text',
        content: `
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-800">Bouger pour l'esprit</h2>
        <p class="text-gray-700">
          L'activité physique libère des endorphines, connues pour leur effet antidépresseur naturel.
          Même une marche quotidienne de 30 minutes peut significativement réduire le stress
          et améliorer l'humeur.
        </p>
        <p class="text-gray-700">
          Le mouvement est un allié puissant pour une santé mentale durable.
        </p>
      </section>
    `,
        order: 7,
    },
    {
        type: 'text',
        content: `
      <section class="text-center pt-8">
        <p class="text-gray-600">
          Prendre soin de soi, c'est aussi prendre soin de son mental 💚
        </p>
      </section>
    `,
        order: 8,
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
                    lastname: 'Kent',
                    firstname: 'Clark',
                    email: 'superman@example.com',
                    password: '$2b$10$.tLd5jVIevXlDaHxPura0u1NNUB5OgLIw7QEDTJZlR9jy345pLTJe', // bcrypt hash
                    roleId: roles.find(r => r.label === 'super-admin')?.id,
                },
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

    const existingHealthPage = await prisma.page.findUnique({ where: { slug: 'sante-hygiene-vie' } });

    if (!existingHealthPage) {
        await prisma.page.create({
            data: {
                title: 'Santé mentale et hygiène de vie',
                slug: 'sante-hygiene-vie',
                content: {
                    create: healthLifestylePageContent,
                },
            },
            include: {
                content: true,
            },
        });
        console.log('✅ Page "Santé mentale et hygiène de vie" seeded');
    } else {
        console.log('ℹ️ Page "Santé mentale et hygiène de vie" already exists, skipping');
    }



    const existingMenuItems = await prisma.menuItem.findMany();
    if (existingMenuItems.length === 0) {
        await prisma.menuItem.createMany({
            data: [
                {label: 'À propos', slug: 'a-propos', order: 4, isPublic: true, requiredRole: null},
                {label: 'Santé et hygiène', slug: 'sante-hygiene-vie', order: 3, isPublic: true, requiredRole: null},
            ],
        });

        console.log('✅ MenuItems seeded');
    } else {
        console.log('ℹ️ MenuItems already exist, skipping');
    }

    const existingQuestionnaire = await prisma.questionnaire.findFirst({
        where: { title: 'Échelle de Holmes et Rahe' }
    });

    let questionnaireId;
    if (!existingQuestionnaire) {
        const questionnaire = await prisma.questionnaire.create({
            data: {
                title: 'Échelle de Holmes et Rahe',
                description: "Évaluation du stress basée sur les événements de vie. Pour chacun des événements suivants, veuillez indiquer si vous l’avez vécu au cours des 12 derniers mois.",
            },
        });
        questionnaireId = questionnaire.id;
        console.log('✅ Questionnaire Holmes et Rahe seeded');
    } else {
        questionnaireId = existingQuestionnaire.id;
        console.log('ℹ️ Questionnaire already exists, skipping');
    }

    const existingEvents = await prisma.event.findMany({ where: { questionnaireId } });
    if (existingEvents.length === 0) {
        const events = [
            { label: 'Mort du conjoint', score: 100 },
            { label: 'Divorce', score: 73 },
            { label: 'Séparation des époux', score: 65 },
            { label: 'Mort d’un parent proche', score: 63 },
            { label: 'Période de prison', score: 63 },
            { label: 'Blessure corporelle ou maladie', score: 53 },
            { label: 'Mariage', score: 50 },
            { label: 'Licenciement', score: 47 },
            { label: 'Réconciliation entre époux', score: 45 },
            { label: 'Départ à la retraite', score: 45 },
            { label: 'Changement dans la santé d’un membre de la famille', score: 44 },
            { label: 'Grossesse', score: 40 },
            { label: 'Difficultés sexuelles', score: 39 },
            { label: 'Arrivée d’un nouveau membre dans la famille', score: 39 },
            { label: 'Changement dans l’univers du travail', score: 39 },
            { label: 'Changement au niveau financier', score: 38 },
            { label: 'Mort d’un ami proche', score: 37 },
            { label: 'Changement de fonction professionnelle', score: 36 },
            { label: 'Modification de la fréquence des scènes de ménage', score: 35 },
            { label: 'Hypothèque ou emprunt de plus de 3.000 €', score: 31 },
            { label: 'Saisie sur hypothèque ou sur prêt', score: 30 },
            { label: 'Changement de responsabilité dans le travail', score: 29 },
            { label: 'Départ du foyer d’une fille ou d’un fils', score: 29 },
            { label: 'Difficultés avec les beaux-parents', score: 29 },
            { label: 'Succès exceptionnel', score: 28 },
            { label: 'Conjoint commençant ou cessant de travailler', score: 26 },
            { label: 'Début ou fin des études', score: 26 },
            { label: 'Changement dans les conditions de vie', score: 25 },
            { label: 'Changement d’habitudes', score: 24 },
            { label: 'Difficultés avec son employeur/son manager', score: 23 },
            { label: 'Changement d’horaires ou de conditions de travail', score: 20 },
            { label: 'Changement de domicile', score: 20 },
            { label: 'Changement de lieu d’étude', score: 20 },
            { label: 'Changement dans les loisirs', score: 19 },
            { label: 'Changement dans les activités de la paroisse', score: 19 },
            { label: 'Changement dans les activités sociales', score: 19 },
            { label: 'Hypothèque ou emprunt de moins de 3.000€', score: 17 },
            { label: 'Changement dans les habitudes de sommeil', score: 16 },
            { label: 'Changement du nombre de réunions de famille', score: 15 },
            { label: 'Changement dans les habitudes alimentaires', score: 15 },
            { label: 'Vacances', score: 13 },
            { label: 'Noël', score: 12 },
            { label: 'Infractions mineures à la loi, contraventions', score: 11 },
        ];

        await prisma.event.createMany({
            data: events.map(e => ({
                ...e,
                questionnaireId,
            })),
        });

        console.log('✅ Events seeded');
    } else {
        console.log('ℹ️ Events already exist, skipping');
    }

    const existingStressRanges = await prisma.stressFeedbackRange.findMany();

    if (existingStressRanges.length === 0) {
        await prisma.stressFeedbackRange.createMany({
            data: [
                {
                    minScore: 0,
                    maxScore: 149,
                    message: "Votre niveau de stress est relativement faible. Continuez à adopter de bonnes habitudes de vie."
                },
                {
                    minScore: 150,
                    maxScore: 199,
                    message: "Vous présentez un risque modéré de stress. Il est conseillé de surveiller votre bien-être et de pratiquer des activités relaxantes."
                },
                {
                    minScore: 200,
                    maxScore: 299,
                    message: "Votre niveau de stress est élevé. Il peut être utile d'en parler à un professionnel ou de mettre en place des stratégies de gestion du stress."
                },
                {
                    minScore: 300,
                    maxScore: 1000,
                    message: "Vous présentez un risque très élevé de troubles liés au stress. Une consultation avec un professionnel de santé mentale est fortement recommandée."
                },
            ],
        });
        console.log('✅ StressFeedbackRanges seeded');
    } else {
        console.log('ℹ️ StressFeedbackRanges already exist, skipping');
    }


}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
