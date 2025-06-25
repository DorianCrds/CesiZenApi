const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2]), UserController.getAllUsers);
router.get('/:id', authenticate, authorizeRoles([1, 2]), UserController.getUserById);
router.post('/', authenticate, authorizeRoles([1]), UserController.createUser);
router.put('/:id', authenticate, authorizeRoles([1, 2]), UserController.updateUser);
router.delete('/:id', authenticate, authorizeRoles([1]), UserController.deleteUser);


module.exports = router;
