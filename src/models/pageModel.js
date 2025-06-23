const prisma = require('../config/prisma');

const PageModel = {
    getAll: async () => {
        return await prisma.page.findMany({
            include: { content: true },
        });
    },

    getBySlug: async (slug) => {
        return await prisma.page.findUnique({
            where: { slug },
            include: { content: true },
        });
    },

    create: async ({ title, slug, contentBlocks }) => {
        return await prisma.page.create({
            data: {
                title,
                slug,
                content: {
                    create: contentBlocks,
                },
            },
            include: { content: true },
        });
    },

    update: async (id, data) => {
        return await prisma.page.update({
            where: { id: Number(id) },
            data,
        });
    },

    delete: async (id) => {
        return await prisma.page.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = PageModel;
