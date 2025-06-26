/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserResponse:
 *       type: object
 *       required:
 *         - userId
 *         - questionnaireId
 *         - selectedEvents
 *       properties:
 *         userId:
 *           type: integer
 *           example: 42
 *           description: ID de l'utilisateur qui répond
 *         questionnaireId:
 *           type: integer
 *           example: 7
 *           description: ID du questionnaire concerné
 *         selectedEvents:
 *           type: array
 *           items:
 *             type: integer
 *           example: [3, 5, 9]
 *           description: Liste des IDs des événements sélectionnés
 */
