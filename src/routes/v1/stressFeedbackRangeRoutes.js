const express = require('express');
const router = express.Router();
const StressFeedbackRangeController = require('../../controllers/StressFeedbackRangeController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const {createStressFeedbackRangeSchema, updateStressFeedbackRangeSchema} = require("../../validation/stressFeedbackRangeValidator");

router.use(authenticate);

router.get('/', StressFeedbackRangeController.getAllStressFeedbackRanges);
router.get('/:id', StressFeedbackRangeController.getStressFeedbackRangeById);
router.post('/', authorizeRoles([1, 2]), validate(createStressFeedbackRangeSchema), StressFeedbackRangeController.createStressFeedbackRange);
router.put('/:id', authorizeRoles([1, 2]), validate(updateStressFeedbackRangeSchema), StressFeedbackRangeController.updateStressFeedbackRange);
router.delete('/:id', authorizeRoles([1, 2]), StressFeedbackRangeController.deleteStressFeedbackRange);


module.exports = router;
