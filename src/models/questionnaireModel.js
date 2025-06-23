const prisma = require('../config/prisma');

const QuestionnaireModel = {
    getAll: async () => {
        return await prisma.questionnaire.findMany({
            include: {
                events: true,
            },
        });
    },

    getById: async (id) => {
        return await prisma.questionnaire.findUnique({
            where: { id: Number(id) },
            include: {
                events: true,
            },
        });
    },

    create: async ({ title, description, events }) => {
        return await prisma.questionnaire.create({
            data: {
                title,
                description,
                events: {
                    create: events, // ex: [{ label: 'event 1', score: 5 }, ...]
                },
            },
            include: {
                events: true,
            },
        });
    },

    delete: async (id) => {
        return await prisma.questionnaire.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = QuestionnaireModel;
