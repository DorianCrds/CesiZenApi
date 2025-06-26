/**
 * @swagger
 * tags:
 *   name: StressFeedbackRanges
 *   description: Gestion des plages de messages de feedback selon le niveau de stress
 *
 * components:
 *   schemas:
 *     StressFeedbackRange:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         minScore:
 *           type: integer
 *           example: 0
 *         maxScore:
 *           type: integer
 *           example: 5
 *         message:
 *           type: string
 *           example: "Vous semblez détendu"
 *
 *     CreateStressFeedbackRange:
 *       type: object
 *       required:
 *         - minScore
 *         - maxScore
 *         - message
 *       properties:
 *         minScore:
 *           type: integer
 *           example: 0
 *         maxScore:
 *           type: integer
 *           example: 10
 *         message:
 *           type: string
 *           example: "Votre stress est modéré"
 *
 *     UpdateStressFeedbackRange:
 *       type: object
 *       properties:
 *         minScore:
 *           type: integer
 *         maxScore:
 *           type: integer
 *         message:
 *           type: string
 *
 * paths:
 *   /stress-feedback-ranges:
 *     get:
 *       tags:
 *         - StressFeedbackRanges
 *       summary: Récupère toutes les plages de feedback
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des plages de feedback
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/StressFeedbackRange'
 *         401:
 *           description: Non authentifié
 *
 *     post:
 *       tags:
 *         - StressFeedbackRanges
 *       summary: Crée une plage de feedback
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateStressFeedbackRange'
 *       responses:
 *         201:
 *           description: Plage de feedback créée
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/StressFeedbackRange'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *   /stress-feedback-ranges/{id}:
 *     get:
 *       tags:
 *         - StressFeedbackRanges
 *       summary: Récupère une plage de feedback par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la plage
 *       responses:
 *         200:
 *           description: Plage de feedback trouvée
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/StressFeedbackRange'
 *         401:
 *           description: Non authentifié
 *         404:
 *           description: Non trouvé
 *
 *     put:
 *       tags:
 *         - StressFeedbackRanges
 *       summary: Met à jour une plage de feedback
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la plage
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateStressFeedbackRange'
 *       responses:
 *         200:
 *           description: Mise à jour réussie
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/StressFeedbackRange'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Plage non trouvée
 *
 *     delete:
 *       tags:
 *         - StressFeedbackRanges
 *       summary: Supprime une plage de feedback
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la plage
 *       responses:
 *         204:
 *           description: Supprimé avec succès
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Plage non trouvée
 */
