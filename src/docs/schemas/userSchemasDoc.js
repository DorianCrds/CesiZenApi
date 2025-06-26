/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUser:
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
 *           example: John
 *           description: Prénom de l'utilisateur
 *         lastname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: Doe
 *           description: Nom de famille de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *           description: Adresse email de l'utilisateur
 *         password:
 *           type: string
 *           minLength: 6
 *           format: password
 *           example: strongpassword123
 *           description: Mot de passe de l'utilisateur
 *         roleId:
 *           type: integer
 *           enum: [1, 2, 3]
 *           example: 2
 *           description: ID du rôle utilisateur (optionnel)
 *
 *     UpdateUser:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: John
 *           description: Prénom de l'utilisateur
 *         lastname:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           example: Doe
 *           description: Nom de famille de l'utilisateur
 *         email:
 *           type: string
 *           format: email
 *           example: john.doe@example.com
 *           description: Adresse email de l'utilisateur
 *         password:
 *           type: string
 *           minLength: 6
 *           format: password
 *           example: newstrongpassword123
 *           description: Mot de passe de l'utilisateur
 *         roleId:
 *           type: integer
 *           enum: [1, 2, 3]
 *           example: 2
 *           description: ID du rôle utilisateur (optionnel)
 */
