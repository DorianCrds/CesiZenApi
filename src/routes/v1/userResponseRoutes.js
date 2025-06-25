const express = require('express');
const router = express.Router();
const UserResponseController = require('../../controllers/UserResponseController');
const authorizeRoles = require("../../middlewares/roleMiddleware");
const authenticate = require("../../middlewares/authMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2]), UserResponseController.getAllUserResponses);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), UserResponseController.getUserResponseById);
router.post('/', authenticate, authorizeRoles([1, 2, 3]), UserResponseController.createUserResponse);
router.get('/:id/result', authenticate, authorizeRoles([1, 2, 3]), UserResponseController.getResult);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), UserResponseController.deleteUserResponse);


module.exports = router;
