// testController.js

const getAllRoles = (req, res) => {
    res.send('List of all roles');
  };
  
  const createRole = (req, res) => {
    res.send('role created successfully');
  };
  
  
  const updateRole = (req, res) => {
    res.send(`role with ID ${req.params.id} updated successfully`);
  };
  
  const deleteRole = (req, res) => {
    res.send(`role with ID ${req.params.id} deleted successfully`);
  };
  
  module.exports = { getAllRoles, createRole, updateRole, deleteRole };
  