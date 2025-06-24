const prisma = require('../config/prisma');

const MenuItemModel = {
    getAllMenuItems: async () => {
        return prisma.menuItem.findMany({
            include: { page: true },
        });
    },

    getMenuItemById: async (id) => {
        return prisma.menuItem.findUnique({
            where: { id: parseInt(id) },
            include: { page: true },
        });
    },

    createMenuItem: async (data) => {
        return prisma.menuItem.create({
            data,
            include: { page: true },
        });
    },

    updateMenuItem: async (id, data) => {
        return prisma.menuItem.update({
            where: { id: parseInt(id) },
            data,
            include: { page: true },
        });
    },

    deleteMenuItem: async (id) => {
        return prisma.menuItem.delete({
            where: { id: parseInt(id) },
        });
    },
};

module.exports = MenuItemModel;
