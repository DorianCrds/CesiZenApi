const prisma = require('../config/prisma');

const QuestionnaireModel = {
    getAllQuestionnaires: async () => {
        return await prisma.questionnaire.findMany({
            include: {
                events: true,
            },
        });
    },

    getQuestionnaireById: async (id) => {
        return await prisma.questionnaire.findUnique({
            where: { id: Number(id) },
            include: {
                events: true,
            },
        });
    },

    createQuestionnaire: async ({ title, description, events }) => {
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

    deleteQuestionnaire: async (id) => {
        return await prisma.questionnaire.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = QuestionnaireModel;
