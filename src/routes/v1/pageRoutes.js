const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const {createPageSchema, updatePageSchema} = require("../../validation/pageValidator");

router.get('/public/:slug', pageController.getPageBySlug);

router.get('/', authenticate, authorizeRoles([1, 2, 3]), pageController.getAllPages);
router.get('/:slug', authenticate, authorizeRoles([1, 2, 3]), pageController.getPageBySlug);
router.post('/', authorizeRoles([1, 2]), validate(createPageSchema), pageController.createPage);
router.put('/:id', authorizeRoles([1, 2]), validate(updatePageSchema), pageController.updatePage);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), pageController.deletePage);


module.exports = router;
