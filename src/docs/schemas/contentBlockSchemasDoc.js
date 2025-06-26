/**
 * @swagger
 * components:
 *   schemas:
 *     ContentBlock:
 *       type: object
 *       required:
 *         - type
 *         - content
 *         - order
 *         - pageId
 *       properties:
 *         type:
 *           type: string
 *           enum:
 *             - text
 *             - image
 *             - video
 *           example: text
 *           description: Le type de bloc de contenu
 *         content:
 *           type: string
 *           example: "Ceci est un bloc de texte."
 *           description: Le contenu du bloc
 *         order:
 *           type: integer
 *           example: 1
 *           description: L'ordre d'affichage du bloc dans la page
 *         pageId:
 *           type: integer
 *           example: 10
 *           description: L'identifiant de la page associée au bloc
 */
