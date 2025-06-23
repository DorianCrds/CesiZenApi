const prisma = require('../config/prisma');

const RoleModel = {
    getAll: async () => {
        return await prisma.role.findMany();
    },

    getById: async (id) => {
        return await prisma.role.findUnique({
            where: { id: Number(id) },
        });
    },

    create: async (label) => {
        return await prisma.role.create({
            data: { label },
        });
    },

    delete: async (id) => {
        await prisma.role.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = RoleModel;
