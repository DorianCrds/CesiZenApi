const express = require('express');
const router = express.Router();
const AdminStatsController = require('../../controllers/adminStatsController');
const authenticate = require('../../middlewares/authMiddleware');
const authorizeRoles = require('../../middlewares/roleMiddleware');

// Accès uniquement pour les admins (id 2) et super-admins (id 1)
router.get('/stats', authenticate, authorizeRoles([1, 2]), AdminStatsController.getStats);

module.exports = router;
