const express = require('express');
const router = express.Router();
const MenuItemController = require('../../controllers/MenuItemController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), MenuItemController.getAllMenuItems);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), MenuItemController.getMenuItemById);
router.post('/', authenticate, authorizeRoles([1, 2]), MenuItemController.createMenuItem);
router.put('/:id', authenticate, authorizeRoles([1, 2]), MenuItemController.updateMenuItem);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), MenuItemController.deleteMenuItem);


module.exports = router;
