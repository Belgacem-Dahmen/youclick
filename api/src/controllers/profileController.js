// profileController.js

const getProfileInfos = (req, res) => {
  res.send("Profile info");
};

const updateProfile = (req, res) => {
  res.send(`Profile with ID ${req.params.id} updated successfully`);
};

module.exports = { getProfileInfos, updateProfile };
