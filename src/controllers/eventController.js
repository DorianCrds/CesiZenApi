const EventModel = require('../models/eventModel');

const EventController = {
    getAll: async (req, res) => {
        try {
            const events = await EventModel.getAll();
            res.json(events);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const event = await EventModel.getById(req.params.id);
            if (!event) return res.status(404).json({ message: 'Event not found' });
            res.json(event);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const { label, score, questionnaireId } = req.body;
            const newEvent = await EventModel.create({ label, score, questionnaireId });
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const updated = await EventModel.update(req.params.id, req.body);
            res.json(updated);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await EventModel.delete(req.params.id);
            res.json({ message: 'Event deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = EventController;
