const jwt = require('jsonwebtoken');



const isOwner = (req, res, next) => {
  const loggedInUserId = req.user.id; // Assuming user info is stored in req.user
  const profileId = req.params.id;

  if (parseInt(loggedInUserId) !== parseInt(profileId)) {
    return res
      .status(403)
      .json({ message: "You can only update your own profile." });
  }
  next();
};
