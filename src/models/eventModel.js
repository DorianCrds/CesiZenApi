const prisma = require('../config/prisma');

const EventModel = {
    getAllEvents: async () => {
        return await prisma.event.findMany({
            include: {
                questionnaire: true,
            },
        });
    },

    getEventById: async (id) => {
        return await prisma.event.findUnique({
            where: { id: Number(id) },
            include: {
                questionnaire: true,
            },
        });
    },

    createEvent: async ({ label, score, questionnaireId }) => {
        return await prisma.event.create({
            data: {
                label,
                score,
                questionnaire: { connect: { id: questionnaireId } },
            },
        });
    },

    updateEvent: async (id, updateData) => {
        return await prisma.event.update({
            where: { id: Number(id) },
            data: updateData,
        });
    },

    deleteEvent: async (id) => {
        return await prisma.event.delete({
            where: { id: Number(id) },
        });
    },
};

module.exports = EventModel;
