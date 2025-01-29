// src/models/User.js

const database = require('../config/database'); // MySQL connection

// User Model
const User = {
  // Create a new user
  async create(username, email, password) {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    try {
      const [result] = await database.execute(query, [username, email, password]);
      return result.insertId; // Return the newly created user ID
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  },

  // Get a user by email
  async getByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    try {
      const [rows] = await database.execute(query, [email]);
      return rows[0]; // Return the first matching user (or undefined if not found)
    } catch (error) {
      throw new Error('Error fetching user by email: ' + error.message);
    }
  },

  // Get a user by ID
  async getById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    try {
      const [rows] = await database.execute(query, [id]);
      return rows[0]; // Return the user if found, otherwise undefined
    } catch (error) {
      throw new Error('Error fetching user by ID: ' + error.message);
    }
  },

  // Update user details (e.g., username, email, password)
  async update(id, username, email, password) {
    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    try {
      const [result] = await database.execute(query, [username, email, password, id]);
      return result.affectedRows > 0; // Return true if the update was successful, otherwise false
    } catch (error) {
      throw new Error('Error updating user: ' + error.message);
    }
  },

  // Delete a user by ID
  async delete(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    try {
      const [result] = await database.execute(query, [id]);
      return result.affectedRows > 0; // Return true if the user was deleted, otherwise false
    } catch (error) {
      throw new Error('Error deleting user: ' + error.message);
    }
  },

  // Optional: Method to check if the email already exists (for registration purposes)
  async emailExists(email) {
    if (!email) {
      throw new Error('Email is required');
    }

    const query = 'SELECT COUNT(*) as count FROM users WHERE email = ?';
    try {
      const [rows] = await database.execute(query, [email]);
      return rows[0].count > 0; // Return true if the email exists, otherwise false
    } catch (error) {
      throw new Error('Error checking if email exists: ' + error.message);
    }
  }
};

module.exports = User;
