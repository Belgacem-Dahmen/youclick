// src/controllers/authController.js

const bcrypt = require('bcrypt');  // For password hashing
const jwt = require('jsonwebtoken'); // For JWT generation
const User = require('../models/User'); // Import User model from models

// Helper function to generate JWT token
const generateToken = (userId,role_id) => {
  const payload = { userId,role_id };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: process.env.JWT_EXPIRES_IN};
  return jwt.sign(payload, secret, options);
};

// Register a new user
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.getByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const userId = await User.create(username, email, hashedPassword);
    
    // Return a success message
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login a user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.getByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = generateToken(user.id, user.role_id);

    // Return the token in the response
    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in user', error: error.message });
  }
};

// Logout a user
const logout = (req, res) => {
  // For logout, we typically handle it on the client side (e.g., clearing the token)
  // Here, we can just send a success response
  res.status(200).json({ message: 'User logged out successfully' });
};

module.exports = { register, login, logout };
