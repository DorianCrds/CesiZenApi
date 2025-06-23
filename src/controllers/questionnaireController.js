const QuestionnaireModel = require('../models/questionnaireModel');

const QuestionnaireController = {
    getAll: async (req, res) => {
        try {
            const questionnaires = await QuestionnaireModel.getAll();
            res.json(questionnaires);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getById: async (req, res) => {
        try {
            const questionnaire = await QuestionnaireModel.getById(req.params.id);
            if (!questionnaire) return res.status(404).json({ message: 'Not found' });
            res.json(questionnaire);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const { title, description, events } = req.body;
            const newQuestionnaire = await QuestionnaireModel.create({ title, description, events });
            res.status(201).json(newQuestionnaire);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await QuestionnaireModel.delete(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = QuestionnaireController;
