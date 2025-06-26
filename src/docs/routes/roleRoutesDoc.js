/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Gestion des rôles utilisateurs
 *
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         label:
 *           type: string
 *           example: "Administrateur"
 *     CreateRole:
 *       type: object
 *       required:
 *         - label
 *       properties:
 *         label:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           example: "Modérateur"
 *
 * paths:
 *   /roles:
 *     get:
 *       tags:
 *         - Roles
 *       summary: Récupère tous les rôles
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des rôles
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Role'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *     post:
 *       tags:
 *         - Roles
 *       summary: Crée un rôle
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateRole'
 *       responses:
 *         201:
 *           description: Rôle créé avec succès
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Role'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *   /roles/{id}:
 *     get:
 *       tags:
 *         - Roles
 *       summary: Récupère un rôle par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID du rôle
 *       responses:
 *         200:
 *           description: Rôle trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Role'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Rôle non trouvé
 *
 *     delete:
 *       tags:
 *         - Roles
 *       summary: Supprime un rôle
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID du rôle
 *       responses:
 *         204:
 *           description: Rôle supprimé
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Rôle non trouvé
 */
