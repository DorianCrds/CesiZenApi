const express = require('express');
const router = express.Router();
const { login, register, me } = require('../../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.post('/me', me);

module.exports = router;
