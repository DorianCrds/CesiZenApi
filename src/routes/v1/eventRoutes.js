const express = require('express');
const router = express.Router();
const EventController = require('../../controllers/eventController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.get('/', authenticate, authorizeRoles([1, 2, 3]), EventController.getAllEvents);
router.get('/:id', authenticate, authorizeRoles([1, 2, 3]), EventController.getEventById);
router.post('/', authenticate, authorizeRoles([1, 2]), EventController.createEvent);
router.put('/:id', authenticate, authorizeRoles([1, 2]), EventController.updateEvent);
router.delete('/:id', authenticate, authorizeRoles([1, 2]), EventController.deleteEvent);


module.exports = router;
