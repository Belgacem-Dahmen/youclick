// userController.js

const getAllUsers = (req, res) => {
    res.send('List of all users');
  };
  
  const getUserById = (req, res) => {
    res.send(`User details for user with ID: ${req.params.id}`);
  };
  
  const updateUser = (req, res) => {
    res.send(`User with ID ${req.params.id} updated successfully`);
  };
  
  const deleteUser = (req, res) => {
    res.send(`User with ID ${req.params.id} deleted successfully`);
  };
  
  module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
  