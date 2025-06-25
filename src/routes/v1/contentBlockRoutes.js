const express = require('express');
const router = express.Router();
const ContentBlockController = require('../../controllers/ContentBlockController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), ContentBlockController.getAllContentBlocks);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), ContentBlockController.getContentBlockById);
router.post('/', authenticate, authorizeRoles([1, 2]), ContentBlockController.createContentBlock);
router.put('/:id', authenticate, authorizeRoles([1, 2]), ContentBlockController.updateContentBlock);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), ContentBlockController.deleteContentBlock);


module.exports = router;
