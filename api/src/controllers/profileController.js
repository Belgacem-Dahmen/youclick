// profileController.js

const Profile = require("../models/Profile");

const getProfileInfos = async (req, res) => {
  const user_id = req.params.id;
  try {
    const profile = await Profile.getProfileByUserId(user_id); // Fetch profile by ID
    if (profile) {
      res.json({ message: `Profile info for user ID ${user_id}`, profile });
    } else {
      res
        .status(404)
        .json({ message: `Profile not found for user ID ${user_id}` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching profile: ${error.message}` });
  }
};

const updateProfile = async (req, res) => {
  const user_id = req.params.id; // Get the user ID from request params
  const updateData = req.body; // Get the update data from request body

  try {
    const affectedRows = await Profile.update(user_id, updateData);
    if (affectedRows > 0) {
      res.json({ message: `Profile with ID ${user_id} updated successfully` });
    } else {
      res.status(404).json({ message: "Profile not found or no changes made" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfileInfos, updateProfile };
