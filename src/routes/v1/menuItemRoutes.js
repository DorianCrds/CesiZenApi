const express = require('express');
const router = express.Router();
const MenuItemController = require('../../controllers/menuItemController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");
const {menuItemSchema} = require("../../validation/menuItemValidator");
const validate = require("../../middlewares/validateMiddleware");

router.use(authenticate);

router.get('/', authorizeRoles([1, 2, 3]), MenuItemController.getAllMenuItems);
router.get('/:id', authorizeRoles([1, 2, 3]), MenuItemController.getMenuItemById);
router.post('/', authorizeRoles([1, 2]), validate(menuItemSchema), MenuItemController.createMenuItem);
router.put('/:id', authorizeRoles([1, 2]), validate(menuItemSchema), MenuItemController.updateMenuItem);
router.delete('/:id', authorizeRoles([1, 2]), MenuItemController.deleteMenuItem);


module.exports = router;
