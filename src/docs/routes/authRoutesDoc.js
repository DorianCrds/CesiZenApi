/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification et gestion des utilisateurs
 *
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: John
 *         lastname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *         password:
 *           type: string
 *           minLength: 6
 *           example: strongPassword123
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *         password:
 *           type: string
 *           example: strongPassword123
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *         firstname:
 *           type: string
 *           example: John
 *         lastname:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *         roleId:
 *           type: integer
 *           example: 2
 *
 * paths:
 *   /auth/login:
 *     post:
 *       tags:
 *         - Auth
 *       summary: Connexion d'un utilisateur
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       responses:
 *         200:
 *           description: Utilisateur connecté avec succès
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         401:
 *           description: Email ou mot de passe invalide
 *
 *   /auth/register:
 *     post:
 *       tags:
 *         - Auth
 *       summary: Création d'un nouvel utilisateur
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       responses:
 *         201:
 *           description: Utilisateur créé avec succès
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         400:
 *           description: Données invalides ou manquantes
 *
 *   /auth/me:
 *     post:
 *       tags:
 *         - Auth
 *       summary: Récupère les informations de l'utilisateur connecté
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Détails de l'utilisateur connecté
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         401:
 *           description: Non authentifié ou token invalide
 *         403:
 *           description: Accès refusé (rôle non autorisé)
 */
