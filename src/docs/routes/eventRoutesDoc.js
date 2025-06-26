/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Gestion des événements
 *
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         label:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Evénement important"
 *         score:
 *           type: integer
 *           minimum: 0
 *           example: 10
 *         questionnaireId:
 *           type: integer
 *           example: 5
 *
 *     CreateEvent:
 *       type: object
 *       required:
 *         - label
 *         - score
 *         - questionnaireId
 *       properties:
 *         label:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Nouvel événement"
 *         score:
 *           type: integer
 *           minimum: 0
 *           example: 15
 *         questionnaireId:
 *           type: integer
 *           example: 3
 *
 *     UpdateEvent:
 *       type: object
 *       properties:
 *         label:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Événement mis à jour"
 *         score:
 *           type: integer
 *           minimum: 0
 *           example: 20
 *         questionnaireId:
 *           type: integer
 *           example: 4
 *
 * paths:
 *   /events:
 *     get:
 *       tags:
 *         - Events
 *       summary: Récupère tous les événements
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des événements
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Event'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *     post:
 *       tags:
 *         - Events
 *       summary: Crée un nouvel événement
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateEvent'
 *       responses:
 *         201:
 *           description: Événement créé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Event'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *
 *   /events/{id}:
 *     get:
 *       tags:
 *         - Events
 *       summary: Récupère un événement par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l'événement
 *       responses:
 *         200:
 *           description: Événement trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Event'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Événement non trouvé
 *
 *     put:
 *       tags:
 *         - Events
 *       summary: Met à jour un événement par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l'événement
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateEvent'
 *       responses:
 *         200:
 *           description: Événement mis à jour
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Event'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Événement non trouvé
 *
 *     delete:
 *       tags:
 *         - Events
 *       summary: Supprime un événement par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de l'événement
 *       responses:
 *         204:
 *           description: Événement supprimé avec succès
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Rôle non autorisé
 *         404:
 *           description: Événement non trouvé
 */
