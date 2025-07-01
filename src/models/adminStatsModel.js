const prisma = require('../config/prisma');

const AdminStatsModel = {
    getDashboardStats: async () => {
        const [usersCount, contentCount, questionnaireCount, responsesCount] = await Promise.all([
            prisma.user.count({ where: { isActive: true } }),
            prisma.contentBlock.count(),
            prisma.questionnaire.count(),
            prisma.userResponse.count()
        ]);

        return {
            usersCount,
            contentCount,
            questionnaireCount,
            responsesCount,
        };
    },
};

module.exports = AdminStatsModel;
