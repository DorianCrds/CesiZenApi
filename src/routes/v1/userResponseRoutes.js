const express = require('express');
const router = express.Router();
const UserResponseController = require('../../controllers/UserResponseController');

router.get('/', UserResponseController.getAllUserResponses);
router.get('/:id', UserResponseController.getUserResponseById);
router.post('/', UserResponseController.createUserResponse);
router.get('/:id/result', UserResponseController.getResult);
router.delete('/:id', UserResponseController.deleteUserResponse);

module.exports = router;
