const EventModel = require('../models/eventModel');

const EventController = {
    getAllEvents: async (req, res) => {
        try {
            const events = await EventModel.getAllEvents();
            res.json(events);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getEventById: async (req, res) => {
        try {
            const event = await EventModel.getEventById(req.params.id);
            if (!event) return res.status(404).json({ message: 'Event not found' });
            res.json(event);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createEvent: async (req, res) => {
        try {
            const { label, score, questionnaireId } = req.body;
            const newEvent = await EventModel.createEvent({ label, score, questionnaireId });
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const updated = await EventModel.updateEvent(req.params.id, req.body);
            res.json(updated);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteEvent: async (req, res) => {
        try {
            await EventModel.deleteEvent(req.params.id);
            res.json({ message: 'Event deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = EventController;
