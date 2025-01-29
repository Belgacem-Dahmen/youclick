const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateAdmin } = require('../middlewares/authMiddleware');

// Route to get all users (admin only)
router.get('/', authenticateAdmin, userController.getAllUsers);

// Route to get a single user (admin only)
router.get('/:id', authenticateAdmin, userController.getUserById);

// Route to update a user's information (admin only)
router.put('/:id', authenticateAdmin, userController.updateUser);

// Route to delete a user (admin only)
router.delete('/:id', authenticateAdmin, userController.deleteUser);

module.exports = router;
