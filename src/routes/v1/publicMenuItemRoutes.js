const express = require('express');
const router = express.Router();
const PublicMenuController = require('../../controllers/publicMenuItemController');

// Aucune auth ici
router.get('/', PublicMenuController.getMenu);

module.exports = router;
