const express = require('express');
const router = express.Router();
const UserResponseController = require('../../controllers/UserResponseController');

router.get('/', UserResponseController.getAllUserResponses);
router.get('/:id', UserResponseController.getUserResponseById);
router.post('/', UserResponseController.createUserResponse);
router.put('/:id', UserResponseController.updateUserResponse);
router.delete('/:id', UserResponseController.deleteUserResponse);

module.exports = router;
