const express = require('express');
const router = express.Router();
const QuestionnaireController = require('../../controllers/questionnaireController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), QuestionnaireController.getAllQuestionnaires);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), QuestionnaireController.getQuestionnaireById);
router.post('/', authenticate, authorizeRoles([1, 2]), QuestionnaireController.createQuestionnaire);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), QuestionnaireController.deleteQuestionnaire);


module.exports = router;
