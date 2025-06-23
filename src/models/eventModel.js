const prisma = require('../config/prisma');

const EventModel = {
    getAll: async () => {
        return await prisma.event.findMany({
            include: {
                questionnaire: true,
            },
        });
    },

    getById: async (id) => {
        return await prisma.event.findUnique({
            where: { id: Number(id) },
            include: {
                questionnaire: true,
            },
        });
    },

    create: async ({ label, score, questionnaireId }) => {
        return await prisma.event.create({
            data: {
                label,
                score,
                questionnaire: { connect: { id: questionnaireId } },
            },
        });
    },

    update: async (id, updateData) => {
        return await prisma.event.update({
            where: { id: Number(id) },
            data: updateData,
        });
    },

    delete: async (id) => {
        return await prisma.event.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = EventModel;
