const UserResponseModel = require('../models/UserResponseModel');

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

            const events = await prisma.event.findMany({
                where: {
                    id: { in: selectedEvents },
                    questionnaireId: questionnaireId,
                },
                select: { id: true, score: true },
            });

            if (events.length !== selectedEvents.length) {
                return res.status(400).json({ error: 'Some selected events are invalid.' });
            }

            const totalScore = events.reduce((sum, e) => sum + e.score, 0);

            const newResponse = await UserResponseModel.createUserResponse({
                userId,
                questionnaireId,
                selectedEvents: JSON.stringify(selectedEvents),
                totalScore,
            });

            res.status(201).json(newResponse);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error while creating user response.' });
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
};

module.exports = UserResponseController;
