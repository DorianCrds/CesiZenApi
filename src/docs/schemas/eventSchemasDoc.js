/**
 * @swagger
 * components:
 *   schemas:
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
 *           example: "Événement Stressant"
 *           description: Libellé de l'événement
 *         score:
 *           type: integer
 *           minimum: 0
 *           example: 5
 *           description: Score associé à l'événement
 *         questionnaireId:
 *           type: integer
 *           example: 12
 *           description: Identifiant du questionnaire lié
 *     UpdateEvent:
 *       type: object
 *       properties:
 *         label:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Événement Mis à Jour"
 *           description: Libellé mis à jour de l'événement
 *         score:
 *           type: integer
 *           minimum: 0
 *           example: 7
 *           description: Score mis à jour
 *         questionnaireId:
 *           type: integer
 *           example: 12
 *           description: Identifiant du questionnaire mis à jour
 */
