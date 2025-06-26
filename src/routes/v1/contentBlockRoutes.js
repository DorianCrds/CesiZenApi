const express = require('express');
const router = express.Router();
const ContentBlockController = require('../../controllers/contentBlockController');
const authenticate = require('../../middlewares/authMiddleware');
const authorizeRoles = require('../../middlewares/roleMiddleware');
const validate = require('../../middlewares/validateMiddleware');
const {contentBlockSchema} = require("../../validation/contentBlockValidator");

router.use(authenticate);

router.get('/', authorizeRoles([1, 2, 3]), ContentBlockController.getAllContentBlocks);
router.get('/:id', authorizeRoles([1, 2, 3]), ContentBlockController.getContentBlockById);
router.post('/', authorizeRoles([1, 2]), validate(contentBlockSchema), ContentBlockController.createContentBlock);
router.put('/:id', authorizeRoles([1, 2]), validate(contentBlockSchema), ContentBlockController.updateContentBlock);
router.delete('/:id', authorizeRoles([1, 2]), ContentBlockController.deleteContentBlock);

module.exports = router;
