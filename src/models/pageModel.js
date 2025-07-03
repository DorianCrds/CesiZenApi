const prisma = require('../config/prisma');

const PageModel = {
    getAllPages: async () => {
        return await prisma.page.findMany({
            include: { content: true },
        });
    },

    getPageBySlug: async (slug) => {
        return await prisma.page.findUnique({
            where: { slug },
            include: { content: true },
        });
    },

    createPage: async ({ title, slug, contentBlocks }) => {
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

    updatePage: async (id, data) => {
        return await prisma.page.update({
            where: { id: Number(id) }, // ✅ correction : ajout de l'ID dans la clause `where`
            data,
            include: { content: true }, // ✅ optionnel mais utile pour récupérer les blocs après mise à jour
        });
    },

    deletePage: async (id) => {
        return await prisma.page.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = PageModel;
