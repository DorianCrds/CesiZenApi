const express = require('express');
const router = express.Router();
const QuestionnaireController = require('../../controllers/questionnaireController');

router.get('/', QuestionnaireController.getAllQuestionnaires);
router.get('/:id', QuestionnaireController.getQuestionnaireById);
router.post('/', QuestionnaireController.createQuestionnaire);
router.delete('/:id', QuestionnaireController.deleteQuestionnaire);

module.exports = router;
