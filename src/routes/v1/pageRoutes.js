const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), pageController.getAllPages);
router.get('/:slug', authenticate, authorizeRoles([1, 2, 3]), pageController.getPageBySlug);
router.post('/', authenticate, authorizeRoles([1, 2]), pageController.createPage);
router.put('/:id', authenticate, authorizeRoles([1, 2]), pageController.updatePage);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), pageController.deletePage);


module.exports = router;
