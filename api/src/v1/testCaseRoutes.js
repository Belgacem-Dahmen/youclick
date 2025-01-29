const express = require('express');
const router = express.Router();
const testCaseController = require('../controllers/testCaseController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to get all test cases for a specific test
router.get('/test/:testId', authenticateUser, testCaseController.getTestCasesByTestId);

// Route to create a new test case
router.post('/', authenticateUser, testCaseController.createTestCase);

// Route to get a single test case by ID
router.get('/:id', authenticateUser, testCaseController.getTestCaseById);

// Route to update a test case
router.put('/:id', authenticateUser, testCaseController.updateTestCase);

// Route to delete a test case
router.delete('/:id', authenticateUser, testCaseController.deleteTestCase);

module.exports = router;
