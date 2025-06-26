/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePage:
 *       type: object
 *       required:
 *         - title
 *         - slug
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "À propos"
 *           description: Titre de la page
 *         slug:
 *           type: string
 *           pattern: "^[a-zA-Z0-9]+$"
 *           minLength: 3
 *           maxLength: 255
 *           example: "a-propos"
 *           description: Identifiant alphanumérique unique utilisé dans l'URL
 *     UpdatePage:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           example: "À propos"
 *           description: Titre de la page (optionnel)
 *         slug:
 *           type: string
 *           pattern: "^[a-zA-Z0-9]+$"
 *           minLength: 3
 *           maxLength: 255
 *           example: "a-propos"
 *           description: Identifiant alphanumérique unique utilisé dans l'URL (optionnel)
 */
