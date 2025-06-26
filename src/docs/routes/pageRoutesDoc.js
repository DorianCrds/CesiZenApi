/**
 * @swagger
 * tags:
 *   name: Pages
 *   description: Gestion des pages

 * components:
 *   schemas:
 *     Page:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Accueil"
 *         slug:
 *           type: string
 *           example: "accueil"
 *     CreatePage:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Contact"
 *         slug:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "contact"
 *
 * paths:
 *   /pages:
 *     get:
 *       tags:
 *         - Pages
 *       summary: Récupère toutes les pages
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des pages
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Page'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit

 *     post:
 *       tags:
 *         - Pages
 *       summary: Crée une nouvelle page
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePage'
 *       responses:
 *         201:
 *           description: Page créée avec succès
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Page'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit

 *   /pages/{slug}:
 *     get:
 *       tags:
 *         - Pages
 *       summary: Récupère une page par son slug
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: slug
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *           description: Slug de la page
 *       responses:
 *         200:
 *           description: Page trouvée
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Page'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Page non trouvée

 *   /pages/{id}:
 *     put:
 *       tags:
 *         - Pages
 *       summary: Met à jour une page par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la page
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePage'
 *       responses:
 *         200:
 *           description: Page mise à jour
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Page non trouvée

 *     delete:
 *       tags:
 *         - Pages
 *       summary: Supprime une page par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la page
 *       responses:
 *         204:
 *           description: Page supprimée avec succès
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Page non trouvée
 */
