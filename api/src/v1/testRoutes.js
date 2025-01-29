const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to get all tests
router.get('/', authenticateUser, testController.getAllTests);

// Route to create a new test
router.post('/', authenticateUser, testController.createTest);

// Route to get a single test by ID
router.get('/:id', authenticateUser, testController.getTestById);

// Route to update a test
router.put('/:id', authenticateUser, testController.updateTest);

// Route to delete a test
router.delete('/:id', authenticateUser, testController.deleteTest);

module.exports = router;
