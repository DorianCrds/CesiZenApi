const express = require('express');
const router = express.Router();
const QuestionnaireController = require('../../controllers/questionnaireController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const {createQuestionnaireSchema, updateQuestionnaireSchema} = require("../../validation/questionnaireValidator");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), QuestionnaireController.getAllQuestionnaires);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), QuestionnaireController.getQuestionnaireById);
router.post('/', authorizeRoles([1, 2]), validate(createQuestionnaireSchema), QuestionnaireController.createQuestionnaire);
// router.put('/:id', authorizeRoles([1, 2]), validate(updateQuestionnaireSchema), QuestionnaireController.updateQuestionnaire);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), QuestionnaireController.deleteQuestionnaire);


module.exports = router;
