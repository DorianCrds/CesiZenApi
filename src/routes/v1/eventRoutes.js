const express = require('express');
const router = express.Router();
const EventController = require('../../controllers/eventController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");
const validate = require("../../middlewares/validateMiddleware");
const {createEventSchema, updateEventSchema} = require("../../validation/eventValidator");

router.use(authenticate);

router.get('/', authorizeRoles([1, 2, 3]), EventController.getAllEvents);
router.get('/:id', authorizeRoles([1, 2, 3]), EventController.getEventById);
router.post('/', authorizeRoles([1, 2]), validate(createEventSchema), EventController.createEvent);
router.put('/:id', authorizeRoles([1, 2]), validate(updateEventSchema), EventController.updateEvent);
router.delete('/:id', authorizeRoles([1, 2]), EventController.deleteEvent);


module.exports = router;
