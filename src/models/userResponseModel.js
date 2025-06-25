const prisma = require('../config/prisma');

const UserResponseModel = {
    getAllUserResponses: async () => {
        return prisma.userResponse.findMany({
            include: {
                user: true,
                questionnaire: true,
            },
        });
    },

    getUserResponseById: async (id) => {
        return prisma.userResponse.findUnique({
            where: { id: parseInt(id) },
            include: {
                user: true,
                questionnaire: true,
            },
        });
    },

    createUserResponse: async ({ userId, questionnaireId, selectedEvents, totalScore }) => {
        return prisma.userResponse.create({
            data: {
                userId,
                questionnaireId,
                selectedEvents,
                totalScore,
            },
            include: {
                user: true,
                questionnaire: true,
            },
        });
    },

    deleteUserResponse: async (id) => {
        return prisma.userResponse.delete({
            where: { id: parseInt(id) },
        });
    },
};

module.exports = UserResponseModel;
