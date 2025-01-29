const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

// Route to register a new user
router.post('/register', authController.register);

// Route to login
router.post('/login', authController.login);

// Route to logout (invalidate the token)
router.post('/logout', authController.logout);

module.exports = router;
