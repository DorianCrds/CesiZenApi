// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');
const authenticate = require('../../middlewares/authMiddleware');
const authorizeRoles = require('../../middlewares/roleMiddleware');
const validate = require('../../middlewares/validateMiddleware');
const { createPageSchema, updatePageSchema } = require('../../validation/pageValidator');

// Authentification obligatoire pour toutes les routes
router.use(authenticate);

// Lire toutes les pages
router.get('/', authorizeRoles([1, 2, 3]), pageController.getAllPages);

// Lire une page spécifique par slug
router.get('/:slug', authorizeRoles([1, 2, 3]), pageController.getPageBySlug);

// Créer une page
router.post('/', authorizeRoles([1, 2]), validate(createPageSchema), pageController.createPage);

// ✅ Mettre à jour une page par son slug (pas par ID)
router.put('/:slug', authorizeRoles([1, 2]), validate(updatePageSchema), pageController.updatePage);

// ✅ Supprimer une page par son slug
router.delete('/:slug', authorizeRoles([1, 2]), pageController.deletePage);

module.exports = router;
