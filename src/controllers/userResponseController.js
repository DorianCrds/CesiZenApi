const UserResponseModel = require('../models/UserResponseModel');
const prisma = require('../config/prisma');

const UserResponseController = {
    getAllUserResponses: async (req, res) => {
        try {
            const responses = await UserResponseModel.getAllUserResponses();
            res.json(responses);
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while fetching user responses.' });
        }
    },

    getUserResponseById: async (req, res) => {
        try {
            const response = await UserResponseModel.getUserResponseById(req.params.id);
            if (!response) {
                return res.status(404).json({ error: 'User response not found.' });
            }
            res.json(response);
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while fetching the user response.' });
        }
    },

    createUserResponse: async (req, res) => {
        try {
            const { userId, questionnaireId, selectedEvents } = req.body;

            const eventIds = selectedEvents;
            const events = await prisma.event.findMany({
                where: { id: { in: eventIds } },
                select: { score: true },
            });

            const totalScore = events.reduce((sum, e) => sum + e.score, 0);

            const newResponse = await UserResponseModel.createUserResponse({
                userId,
                questionnaireId,
                selectedEvents: JSON.stringify(eventIds),
                totalScore,
            });

            const feedback = await prisma.stressFeedbackRange.findFirst({
                where: {
                    minScore: { lte: totalScore },
                    maxScore: { gte: totalScore },
                },
            });

            res.status(201).json({
                ...newResponse,
                feedbackMessage: feedback?.message || null,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error creating user response.' });
        }
    },

    deleteUserResponse: async (req, res) => {
        try {
            await UserResponseModel.deleteUserResponse(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while deleting the user response.' });
        }
    },

    getResult: async (req, res) => {
        try {
            const response = await prisma.userResponse.findUnique({
                where: { id: parseInt(req.params.id) },
            });

            if (!response) {
                return res.status(404).json({ error: 'User response not found.' });
            }

            const feedback = await prisma.stressFeedbackRange.findFirst({
                where: {
                    minScore: { lte: response.totalScore },
                    maxScore: { gte: response.totalScore },
                },
            });

            res.json({
                userResponse: response,
                feedbackMessage: feedback?.message || null,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error retrieving result.' });
        }
    },

};

module.exports = UserResponseController;
