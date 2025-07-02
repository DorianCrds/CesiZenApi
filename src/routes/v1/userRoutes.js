const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');
const authorizeRoles = require("../../middlewares/roleMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const { createUserSchema, updateUserSchema } = require("../../validation/userValidator");
const authenticate = require("../../middlewares/authMiddleware");

router.use(authenticate);

router.get('/', authorizeRoles([1, 2]), UserController.getAllUsers);
router.get('/:id', authorizeRoles([1, 2]), UserController.getUserById);
router.post('/', authorizeRoles([1]), validate(createUserSchema), UserController.createUser);
router.put('/:id', authorizeRoles([1, 2]), validate(updateUserSchema), UserController.updateUser);
router.delete('/:id', authorizeRoles([1]), UserController.deleteUser);
router.patch('/:id/toggle', authorizeRoles([1, 2]), UserController.toggleUserStatus);


module.exports = router;
