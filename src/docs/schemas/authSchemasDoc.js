/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: Jean
 *         lastname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: Dupont
 *         email:
 *           type: string
 *           format: email
 *           example: jean.dupont@example.com
 *         password:
 *           type: string
 *           minLength: 6
 *           format: password
 *           example: strongpassword123
 *
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: jean.dupont@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: strongpassword123
 */
