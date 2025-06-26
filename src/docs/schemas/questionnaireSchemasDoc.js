/**
 * @swagger
 * components:
 *   schemas:
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
 *           example: "Questionnaire de stress"
 *           description: Titre du questionnaire
 *         description:
 *           type: string
 *           minLength: 3
 *           maxLength: 1000
 *           example: "Un questionnaire pour évaluer le niveau de stress"
 *           description: Description détaillée du questionnaire
 *     UpdateQuestionnaire:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "Questionnaire de stress"
 *           description: Titre du questionnaire (optionnel)
 *         description:
 *           type: string
 *           minLength: 3
 *           maxLength: 1000
 *           example: "Un questionnaire pour évaluer le niveau de stress"
 *           description: Description détaillée du questionnaire (optionnel)
 */
