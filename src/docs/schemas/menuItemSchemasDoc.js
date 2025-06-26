/**
 * @swagger
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       required:
 *         - label
 *         - slug
 *         - order
 *       properties:
 *         label:
 *           type: string
 *           minLength: 1
 *           maxLength: 255
 *           example: "Accueil"
 *           description: Libellé affiché dans le menu
 *         slug:
 *           type: string
 *           minLength: 1
 *           maxLength: 255
 *           example: "home"
 *           description: Identifiant unique de la page dans l'URL
 *         order:
 *           type: integer
 *           example: 1
 *           description: Position dans l'ordre d'affichage du menu
 *         pageId:
 *           type: integer
 *           nullable: true
 *           example: 5
 *           description: Identifiant de la page liée, ou null si aucun
 */
