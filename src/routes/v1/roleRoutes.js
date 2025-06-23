const express = require('express');
const router = express.Router();
const RoleController = require('../../controllers/roleController');

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getById);
router.post('/', RoleController.create);
router.delete('/:id', RoleController.delete);

module.exports = router;
