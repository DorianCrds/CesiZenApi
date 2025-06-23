const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');

// Public pages
router.get('/', pageController.getAll);
router.get('/:slug', pageController.getBySlug);

// Only for Administrators
router.post('/', pageController.create);
router.put('/:id', pageController.update);
router.delete('/:id', pageController.delete);

module.exports = router;
