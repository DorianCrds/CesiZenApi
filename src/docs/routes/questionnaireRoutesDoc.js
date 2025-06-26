/**
 * @swagger
 * tags:
 *   name: Questionnaires
 *   description: Gestion des questionnaires
 *
 * components:
 *   schemas:
 *     Questionnaire:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Questionnaire de stress"
 *         description:
 *           type: string
 *           example: "Évaluez votre niveau de stress avec ce questionnaire"
 *     CreateQuestionnaire:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Santé mentale"
 *         description:
 *           type: string
 *           minLength: 3
 *           maxLength: 1000
 *           example: "Un questionnaire pour évaluer votre santé mentale"
 *
 * paths:
 *   /questionnaires:
 *     get:
 *       tags:
 *         - Questionnaires
 *       summary: Récupère tous les questionnaires
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des questionnaires
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Questionnaire'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *     post:
 *       tags:
 *         - Questionnaires
 *       summary: Crée un questionnaire
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateQuestionnaire'
 *       responses:
 *         201:
 *           description: Questionnaire créé avec succès
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Questionnaire'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *   /questionnaires/{id}:
 *     get:
 *       tags:
 *         - Questionnaires
 *       summary: Récupère un questionnaire par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID du questionnaire
 *       responses:
 *         200:
 *           description: Questionnaire trouvé
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Questionnaire'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Questionnaire non trouvé
 *
 *     delete:
 *       tags:
 *         - Questionnaires
 *       summary: Supprime un questionnaire par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID du questionnaire
 *       responses:
 *         204:
 *           description: Questionnaire supprimé
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Questionnaire non trouvé
 */
