const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");
const { authenticateAdmin } = require("../middlewares/authMiddleware");

// Route to get all users (admin only)
router.get("/", authenticateAdmin, roleController.getAllRoles);


// Route to update a user's information (admin only)
router.put("/:id", authenticateAdmin, roleController.updateRole);

// Route to delete a user (admin only)
router.delete("/:id", authenticateAdmin, roleController.deleteRole);

module.exports = router;
