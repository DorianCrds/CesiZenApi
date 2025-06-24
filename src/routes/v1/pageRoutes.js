const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');

// Public pages
router.get('/', pageController.getAllPages);
router.get('/:slug', pageController.getPageBySlug);

// Only for Administrators
router.post('/', pageController.createPage);
router.put('/:id', pageController.updatePage);
router.delete('/:id', pageController.deletePage);

module.exports = router;
