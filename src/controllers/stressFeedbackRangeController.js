const StressFeedbackRangeModel = require('../models/stressFeedbackRangeModel');

const StressFeedbackRangeController = {
    getAllStressFeedbackRanges: async (req, res) => {
        try {
            const ranges = await StressFeedbackRangeModel.getAllStressFeedbackRanges();
            res.json(ranges);
        } catch (err) {
            res.status(500).json({ error: 'Failed to retrieve stress feedback ranges.' });
        }
    },

    getStressFeedbackRangeById: async (req, res) => {
        try {
            const range = await StressFeedbackRangeModel.getStressFeedbackRangeById(req.params.id);
            if (!range) {
                return res.status(404).json({ error: 'Stress feedback range not found.' });
            }
            res.json(range);
        } catch (err) {
            res.status(500).json({ error: 'Failed to retrieve stress feedback range.' });
        }
    },

    createStressFeedbackRange: async (req, res) => {
        try {
            const { minScore, maxScore, message } = req.body;
            const newRange = await StressFeedbackRangeModel.createStressFeedbackRange({ minScore, maxScore, message });
            res.status(201).json(newRange);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create stress feedback range.' });
        }
    },

    updateStressFeedbackRange: async (req, res) => {
        try {
            const updatedRange = await StressFeedbackRangeModel.updateStressFeedbackRange(req.params.id, req.body);
            res.json(updatedRange);
        } catch (err) {
            res.status(500).json({ error: 'Failed to update stress feedback range.' });
        }
    },

    deleteStressFeedbackRange: async (req, res) => {
        try {
            await StressFeedbackRangeModel.deleteStressFeedbackRange(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete stress feedback range.' });
        }
    },
};

module.exports = StressFeedbackRangeController;
