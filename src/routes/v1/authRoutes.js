const express = require('express');
const router = express.Router();
const { login, register, me } = require('../../controllers/authController');
const authenticate = require("../../middlewares/authMiddleware");
const authorizeRoles = require("../../middlewares/roleMiddleware");

router.post('/login', login);
router.post('/register', register);
router.post('/me', authenticate, authorizeRoles([1, 2, 3]), me);

module.exports = router;
