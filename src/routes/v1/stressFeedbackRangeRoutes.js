const express = require('express');
const router = express.Router();
const StressFeedbackRangeController = require('../../controllers/StressFeedbackRangeController');

router.get('/', StressFeedbackRangeController.getAllStressFeedbackRanges);
router.get('/:id', StressFeedbackRangeController.getStressFeedbackRangeById);
router.post('/', StressFeedbackRangeController.createStressFeedbackRange);
router.put('/:id', StressFeedbackRangeController.updateStressFeedbackRange);
router.delete('/:id', StressFeedbackRangeController.deleteStressFeedbackRange);

module.exports = router;
