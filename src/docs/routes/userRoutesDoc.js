/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs du système
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 3
 *         firstname:
 *           type: string
 *           example: "Alice"
 *         lastname:
 *           type: string
 *           example: "Dupont"
 *         email:
 *           type: string
 *           format: email
 *           example: "alice@example.com"
 *         roleId:
 *           type: integer
 *           example: 2
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CreateUser:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           example: "Alice"
 *         lastname:
 *           type: string
 *           example: "Dupont"
 *         email:
 *           type: string
 *           format: email
 *           example: "alice@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "securePassword123"
 *         roleId:
 *           type: integer
 *           example: 2
 *
 *     UpdateUser:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: "Alice"
 *         lastname:
 *           type: string
 *           example: "Dupont"
 *         email:
 *           type: string
 *           format: email
 *           example: "alice@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "newPassword456"
 *         roleId:
 *           type: integer
 *           example: 1
 *
 * paths:
 *   /users:
 *     get:
 *       tags:
 *         - Users
 *       summary: Récupère tous les utilisateurs
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des utilisateurs
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *     post:
 *       tags:
 *         - Users
 *       summary: Crée un nouvel utilisateur
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUser'
 *       responses:
 *         201:
 *           description: Utilisateur créé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *   /users/{id}:
 *     get:
 *       tags:
 *         - Users
 *       summary: Récupère un utilisateur par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Détail de l'utilisateur
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Utilisateur non trouvé
 *
 *     put:
 *       tags:
 *         - Users
 *       summary: Met à jour un utilisateur
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateUser'
 *       responses:
 *         200:
 *           description: Utilisateur mis à jour
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Utilisateur non trouvé
 *
 *     delete:
 *       tags:
 *         - Users
 *       summary: Supprime un utilisateur
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         204:
 *           description: Utilisateur supprimé
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Utilisateur non trouvé
 */
