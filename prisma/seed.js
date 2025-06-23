const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const existingRoles = await prisma.role.findMany();
    if (existingRoles.length === 0) {
        await prisma.role.createMany({
            data: [
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
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
