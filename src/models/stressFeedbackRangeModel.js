const prisma = require('../config/prisma');

const StressFeedbackRangeModel = {
    getAllStressFeedbackRanges: async () => {
        return await prisma.stressFeedbackRange.findMany({
            orderBy: { minScore: 'asc' },
        });
    },

    getStressFeedbackRangeById: async (id) => {
        return await prisma.stressFeedbackRange.findUnique({
            where: { id: parseInt(id) },
        });
    },

    createStressFeedbackRange: async (data) => {
        return await prisma.stressFeedbackRange.create({
            data,
        });
    },

    updateStressFeedbackRange: async (id, data) => {
        return await prisma.stressFeedbackRange.update({
            where: { id: parseInt(id) },
            data,
        });
    },

    deleteStressFeedbackRange: async (id) => {
        return await prisma.stressFeedbackRange.delete({
            where: { id: parseInt(id) },
        });
    },
};

module.exports = StressFeedbackRangeModel;
