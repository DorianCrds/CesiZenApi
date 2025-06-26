const PageModel = require('../models/pageModel');

const PageController = {
    getAllPages: async (req, res) => {
        try {
            const pages = await PageModel.getAllPages();
            res.json(pages);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getPageBySlug: async (req, res) => {
        try {
            const page = await PageModel.getPageBySlug(req.params.slug);
            if (!page) return res.status(404).json({ error: 'Page not found' });
            res.json(page);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createPage: async (req, res) => {
        try {
            const { title, slug, contentBlocks } = req.body;
            const newPage = await PageModel.createPage({ title, slug, contentBlocks });
            res.status(201).json(newPage);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updatePage: async (req, res) => {
        try {
            const updated = await PageModel.updatePage(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deletePage: async (req, res) => {
        try {
            await PageModel.deletePage(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = PageController;
