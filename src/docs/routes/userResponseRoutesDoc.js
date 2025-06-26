/**
 * @swagger
 * tags:
 *   name: UserResponses
 *   description: Gestion des réponses utilisateur aux questionnaires
 *
 * components:
 *   schemas:
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 5
 *         questionnaireId:
 *           type: integer
 *           example: 2
 *         selectedEvents:
 *           type: array
 *           items:
 *             type: integer
 *           example: [3, 6, 9]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CreateUserResponse:
 *       type: object
 *       required:
 *         - userId
 *         - questionnaireId
 *         - selectedEvents
 *       properties:
 *         userId:
 *           type: integer
 *           example: 5
 *         questionnaireId:
 *           type: integer
 *           example: 2
 *         selectedEvents:
 *           type: array
 *           items:
 *             type: integer
 *           example: [1, 4, 7]
 *
 * paths:
 *   /user-responses:
 *     get:
 *       tags:
 *         - UserResponses
 *       summary: Récupère toutes les réponses utilisateur
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Liste des réponses
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/UserResponse'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *     post:
 *       tags:
 *         - UserResponses
 *       summary: Crée une réponse utilisateur
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponse'
 *       responses:
 *         201:
 *           description: Réponse créée
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/UserResponse'
 *         400:
 *           description: Données invalides
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *
 *   /user-responses/{id}:
 *     get:
 *       tags:
 *         - UserResponses
 *       summary: Récupère une réponse utilisateur par ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la réponse
 *       responses:
 *         200:
 *           description: Détail de la réponse
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/UserResponse'
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Réponse non trouvée
 *
 *     delete:
 *       tags:
 *         - UserResponses
 *       summary: Supprime une réponse utilisateur
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la réponse
 *       responses:
 *         204:
 *           description: Réponse supprimée
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Réponse non trouvée
 *
 *   /user-responses/{id}/result:
 *     get:
 *       tags:
 *         - UserResponses
 *       summary: Récupère les résultats d'une réponse utilisateur
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: integer
 *           description: ID de la réponse
 *       responses:
 *         200:
 *           description: Résultat calculé
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 example:
 *                   score: 7
 *                   feedback: "Votre stress est élevé"
 *         401:
 *           description: Non authentifié
 *         403:
 *           description: Accès interdit
 *         404:
 *           description: Réponse non trouvée
 */
