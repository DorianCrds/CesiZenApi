const prisma = require('../config/prisma');

const ContentBlockModel = {
    getAllContentBlocks: async () => {
        return prisma.contentBlock.findMany({
            include: { page: true },
        });
    },

    getContentBlockById: async (id) => {
        return prisma.contentBlock.findUnique({
            where: { id: parseInt(id) },
            include: { page: true },
        });
    },

    createContentBlock: async (data) => {
        return prisma.contentBlock.create({
            data,
            include: { page: true },
        });
    },

    updateContentBlock: async (id, data) => {
        return prisma.contentBlock.update({
            where: { id: parseInt(id) },
            data,
            include: { page: true },
        });
    },

    deleteContentBlock: async (id) => {
        return prisma.contentBlock.delete({
            where: { id: parseInt(id) },
        });
    },
};

module.exports = ContentBlockModel;
