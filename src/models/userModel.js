const prisma = require('../config/prisma');

const UserModel = {
    getAll: async () => {
        return await prisma.user.findMany({
            include: {
                role: true,
            },
        });
    },

    getById: async (id) => {
        return await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                role: true,
            },
        });
    },

    create: async ({ firstname, lastname, email, password, roleId }) => {
        return await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password,
                role: roleId ? { connect: { id: roleId } } : undefined,
            },
        });
    },

    update: async (id, updateData) => {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: updateData,
        });
    },

    delete: async (id) => {
        return await prisma.user.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = UserModel;
