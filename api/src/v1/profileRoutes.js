const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { authenticateUser } = require("../middlewares/authMiddleware");

// Route profile info of the user
router.get("/:id", authenticateUser, profileController.getProfileInfos);

// Route to update a profile information
router.put("/:id", authenticateUser, profileController.updateProfile);

module.exports = router;
