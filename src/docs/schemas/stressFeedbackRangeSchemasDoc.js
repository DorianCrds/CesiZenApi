/**
 * @swagger
 * components:
 *   schemas:
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
 *           description: Score minimum de la plage de stress
 *         maxScore:
 *           type: integer
 *           example: 10
 *           description: Score maximum de la plage de stress
 *         message:
 *           type: string
 *           minLength: 3
 *           example: "Votre niveau de stress est faible."
 *           description: Message associé à la plage de stress
 *
 *     UpdateStressFeedbackRange:
 *       type: object
 *       properties:
 *         minScore:
 *           type: integer
 *           example: 0
 *           description: Score minimum de la plage de stress
 *         maxScore:
 *           type: integer
 *           example: 10
 *           description: Score maximum de la plage de stress
 *         message:
 *           type: string
 *           minLength: 3
 *           example: "Votre niveau de stress est faible."
 *           description: Message associé à la plage de stress
 */
