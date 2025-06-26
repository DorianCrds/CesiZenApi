const express = require('express');
const router = express.Router();
const UserResponseController = require('../../controllers/userResponseController');
const authorizeRoles = require("../../middlewares/roleMiddleware");
const authenticate = require("../../middlewares/authMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const {createUserResponseSchema} = require("../../validation/userResponseValidator");

router.use(authenticate);

router.get('/', authorizeRoles([1, 2]), UserResponseController.getAllUserResponses);
router.get('/:id', authorizeRoles([1, 2, 3]), UserResponseController.getUserResponseById);
router.post('/', authorizeRoles([1, 2, 3]), validate(createUserResponseSchema), UserResponseController.createUserResponse);
router.get('/:id/result', authorizeRoles([1, 2, 3]), UserResponseController.getResult);
router.delete('/:id', authorizeRoles([1, 2]), UserResponseController.deleteUserResponse);


module.exports = router;
