const PageModel = require('../models/pageModel');

const PageController = {
    getAll: async (req, res) => {
        try {
            const pages = await PageModel.getAll();
            res.json(pages);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getBySlug: async (req, res) => {
        try {
            const page = await PageModel.getBySlug(req.params.slug);
            if (!page) return res.status(404).json({ error: 'Page not found' });
            res.json(page);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const { title, slug, contentBlocks } = req.body;
            const newPage = await PageModel.create({ title, slug, contentBlocks });
            res.status(201).json(newPage);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async (req, res) => {
        try {
            const updated = await PageModel.update(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await PageModel.delete(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = PageController;
