const ContentBlockModel = require('../models/ContentBlockModel');

const ContentBlockController = {
    getAllContentBlocks: async (req, res) => {
        try {
            const blocks = await ContentBlockModel.getAllContentBlocks();
            res.json(blocks);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving content blocks.' });
        }
    },

    getContentBlockById: async (req, res) => {
        try {
            const block = await ContentBlockModel.getContentBlockById(req.params.id);
            if (!block) {
                return res.status(404).json({ error: 'Content block not found.' });
            }
            res.json(block);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving content block.' });
        }
    },

    createContentBlock: async (req, res) => {
        try {
            const newBlock = await ContentBlockModel.createContentBlock(req.body);
            res.status(201).json(newBlock);
        } catch (err) {
            res.status(500).json({ error: 'Error creating content block.' });
        }
    },

    updateContentBlock: async (req, res) => {
        try {
            const updatedBlock = await ContentBlockModel.updateContentBlock(req.params.id, req.body);
            res.json(updatedBlock);
        } catch (err) {
            res.status(500).json({ error: 'Error updating content block.' });
        }
    },

    deleteContentBlock: async (req, res) => {
        try {
            await ContentBlockModel.deleteContentBlock(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'Error deleting content block.' });
        }
    },
};

module.exports = ContentBlockController;
