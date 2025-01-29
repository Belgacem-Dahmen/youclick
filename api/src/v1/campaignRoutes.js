const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to get all campaigns
router.get('/', authenticateUser, campaignController.getAllCampaigns);

// Route to create a new campaign
router.post('/', authenticateUser, campaignController.createCampaign);

// Route to get a single campaign by ID
router.get('/:id', authenticateUser, campaignController.getCampaignById);

// Route to update a campaign
router.put('/:id', authenticateUser, campaignController.updateCampaign);

// Route to delete a campaign
router.delete('/:id', authenticateUser, campaignController.deleteCampaign);

module.exports = router;
