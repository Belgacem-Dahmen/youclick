const jwt = require('jsonwebtoken');
const roles = require('../Enums/Roles');
// const User = require('../models/User'); // assuming you have a User model

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user data to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware to check if the user is an admin
const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (req.user.role !== roles.ADMIN) {
      return res.status(403).json({ message: 'Permission denied, admin only' });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateUser, authenticateAdmin };
