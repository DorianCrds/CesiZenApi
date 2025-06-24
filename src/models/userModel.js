const prisma = require('../config/prisma');

const UserModel = {
    getAllUsers: async () => {
        return await prisma.user.findMany({
            include: {
                role: true,
            },
        });
    },

    getUserById: async (id) => {
        return await prisma.user.findUnique({
            where: { id: Number(id) },
            include: {
                role: true,
            },
        });
    },

    createUser: async ({ firstname, lastname, email, password, roleId }) => {
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

    updateUser: async (id, updateData) => {
        return await prisma.user.update({
            where: { id: Number(id) },
            data: updateData,
        });
    },

    deleteUser: async (id) => {
        return await prisma.user.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = UserModel;
