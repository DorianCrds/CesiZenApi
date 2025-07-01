const AdminStatsModel = require('../models/adminStatsModel');

const AdminStatsController = {
    getStats: async (req, res) => {
        try {
            const stats = await AdminStatsModel.getDashboardStats();
            res.json(stats);
        } catch (error) {
            console.error('Erreur dans AdminStatsController.getStats :', error);
            res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
        }
    },
};

module.exports = AdminStatsController;
