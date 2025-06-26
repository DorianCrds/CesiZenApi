const QuestionnaireModel = require('../models/questionnaireModel');

const QuestionnaireController = {
    getAllQuestionnaires: async (req, res) => {
        try {
            const questionnaires = await QuestionnaireModel.getAllQuestionnaires();
            res.json(questionnaires);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getQuestionnaireById: async (req, res) => {
        try {
            const questionnaire = await QuestionnaireModel.getQuestionnaireById(req.params.id);
            if (!questionnaire) return res.status(404).json({ message: 'Not found' });
            res.json(questionnaire);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createQuestionnaire: async (req, res) => {
        try {
            const { title, description, events } = req.body;
            const newQuestionnaire = await QuestionnaireModel.createQuestionnaire({ title, description, events });
            res.status(201).json(newQuestionnaire);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteQuestionnaire: async (req, res) => {
        try {
            await QuestionnaireModel.deleteQuestionnaire(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = QuestionnaireController;
