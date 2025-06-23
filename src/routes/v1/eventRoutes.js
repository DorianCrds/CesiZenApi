const express = require('express');
const router = express.Router();
const EventController = require('../../controllers/eventController');

router.get('/', EventController.getAll);
router.get('/:id', EventController.getById);
router.post('/', EventController.create);
router.put('/:id', EventController.update);
router.delete('/:id', EventController.delete);

module.exports = router;
