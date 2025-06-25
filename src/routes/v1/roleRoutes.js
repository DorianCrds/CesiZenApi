const express = require('express');
const router = express.Router();
const RoleController = require('../../controllers/roleController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1]), RoleController.getAllRoles);
router.get('/:id', authenticate, authorizeRoles([1]), RoleController.getRoleById);
router.post('/', authenticate, authorizeRoles([1]), RoleController.createRole);
router.delete('/:id', authenticate, authorizeRoles([1]), RoleController.deleteRole);


module.exports = router;
