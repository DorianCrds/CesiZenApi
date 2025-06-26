/**
 * @swagger
 * tags:
 *   name: ContentBlocks
 *   description: Gestion des blocs de contenu
 *
 * components:
 *   schemas:
 *     ContentBlock:
 *       type: object
 *       required:
 *         - type
 *         - content
 *         - order
 *         - pageId
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         type:
 *           type: string
 *           enum: [text, image, video]
 *           example: text
 *         content:
 *           type: string
 *           example: "Voici un contenu texte"
 *         order:
 *           type: integer
 *           example: 1
 *         pageId:
 *           type: integer
 *           example: 12
 *
 * paths:
 *   /content-blocks:
 *     get:
 *       tags:
 *         - ContentBlocks
 *       summary: Récupère tous les blocs de contenu
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des blocs de contenu
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ContentBlock'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *     post:
 *       tags:
 *         - ContentBlocks
 *       summary: Crée un nouveau bloc de contenu
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentBlock'
 *       responses:
 *         201:
 *           description: Bloc de contenu créé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ContentBlock'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *   /content-blocks/{id}:
 *     get:
 *       tags:
 *         - ContentBlocks
 *       summary: Récupère un bloc de contenu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: ID du bloc de contenu
 *       responses:
 *         200:
 *           description: Bloc de contenu trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ContentBlock'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Bloc de contenu non trouvé
 *
 *     put:
 *       tags:
 *         - ContentBlocks
 *       summary: Met à jour un bloc de contenu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: ID du bloc de contenu
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentBlock'
 *       responses:
 *         200:
 *           description: Bloc de contenu mis à jour
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ContentBlock'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Bloc de contenu non trouvé
 *
 *     delete:
 *       tags:
 *         - ContentBlocks
 *       summary: Supprime un bloc de contenu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: ID du bloc de contenu
 *       responses:
 *         204:
 *           description: Bloc de contenu supprimé avec succès
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Bloc de contenu non trouvé
 */
