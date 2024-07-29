const express = require('express');
const { signup, login } = require('../Controllers/VolunteerController');

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

module.exports = router;