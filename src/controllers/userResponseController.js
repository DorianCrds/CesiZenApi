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
            const { userId, questionnaireId, selectedEvents, totalScore } = req.body;

            const newResponse = await UserResponseModel.createUserResponse({
                userId,
                questionnaireId,
                selectedEvents: JSON.stringify(selectedEvents),
                totalScore,
            });

            res.status(201).json(newResponse);
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while creating the user response.' });
        }
    },

    updateUserResponse: async (req, res) => {
        try {
            const updated = await UserResponseModel.updateUserResponse(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(500).json({ error: 'An error occurred while updating the user response.' });
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
