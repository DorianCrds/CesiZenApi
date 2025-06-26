/**
 * @swagger
 * tags:
 *   name: MenuItems
 *   description: Gestion des éléments de menu
 *
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         label:
 *           type: string
 *           example: "Accueil"
 *         slug:
 *           type: string
 *           example: "accueil"
 *         order:
 *           type: integer
 *           example: 1
 *         pageId:
 *           type: integer
 *           nullable: true
 *           example: 3
 *
 *     CreateMenuItem:
 *       type: object
 *       required:
 *         - label
 *         - slug
 *         - order
 *       properties:
 *         label:
 *           type: string
 *           minLength: 1
 *           maxLength: 255
 *           example: "Contact"
 *         slug:
 *           type: string
 *           minLength: 1
 *           maxLength: 255
 *           example: "contact"
 *         order:
 *           type: integer
 *           example: 2
 *         pageId:
 *           type: integer
 *           nullable: true
 *           example: 4
 *
 * paths:
 *   /menu-items:
 *     get:
 *       tags:
 *         - MenuItems
 *       summary: Récupère tous les éléments de menu
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des éléments de menu
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/MenuItem'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *     post:
 *       tags:
 *         - MenuItems
 *       summary: Crée un nouvel élément de menu
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateMenuItem'
 *       responses:
 *         201:
 *           description: Élément de menu créé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/MenuItem'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *   /menu-items/{id}:
 *     get:
 *       tags:
 *         - MenuItems
 *       summary: Récupère un élément de menu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l’élément de menu
 *       responses:
 *         200:
 *           description: Élément trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/MenuItem'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Élément non trouvé
 *
 *     put:
 *       tags:
 *         - MenuItems
 *       summary: Met à jour un élément de menu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l’élément de menu
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateMenuItem'
 *       responses:
 *         200:
 *           description: Élément mis à jour
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/MenuItem'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Élément non trouvé
 *
 *     delete:
 *       tags:
 *         - MenuItems
 *       summary: Supprime un élément de menu par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l’élément de menu
 *       responses:
 *         204:
 *           description: Élément supprimé avec succès
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Élément non trouvé
 */
