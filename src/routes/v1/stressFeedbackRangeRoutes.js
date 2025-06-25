const express = require('express');
const router = express.Router();
const StressFeedbackRangeController = require('../../controllers/StressFeedbackRangeController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2]), StressFeedbackRangeController.getAllStressFeedbackRanges);
router.get('/:id', authenticate, authorizeRoles([1, 2]), StressFeedbackRangeController.getStressFeedbackRangeById);
router.post('/', authenticate, authorizeRoles([1, 2]), StressFeedbackRangeController.createStressFeedbackRange);
router.put('/:id', authenticate, authorizeRoles([1, 2]), StressFeedbackRangeController.updateStressFeedbackRange);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), StressFeedbackRangeController.deleteStressFeedbackRange);


module.exports = router;
