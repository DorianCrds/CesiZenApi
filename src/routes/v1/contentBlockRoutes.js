const express = require('express');
const router = express.Router();
const ContentBlockController = require('../../controllers/ContentBlockController');

router.get('/', ContentBlockController.getAllContentBlocks);
router.get('/:id', ContentBlockController.getContentBlockById);
router.post('/', ContentBlockController.createContentBlock);
router.put('/:id', ContentBlockController.updateContentBlock);
router.delete('/:id', ContentBlockController.deleteContentBlock);

module.exports = router;
