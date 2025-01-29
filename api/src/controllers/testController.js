// testController.js

const getAllTests = (req, res) => {
    res.send('List of all tests');
  };
  
  const createTest = (req, res) => {
    res.send('Test created successfully');
  };
  
  const getTestById = (req, res) => {
    res.send(`Test details for test with ID: ${req.params.id}`);
  };
  
  const updateTest = (req, res) => {
    res.send(`Test with ID ${req.params.id} updated successfully`);
  };
  
  const deleteTest = (req, res) => {
    res.send(`Test with ID ${req.params.id} deleted successfully`);
  };
  
  module.exports = { getAllTests, createTest, getTestById, updateTest, deleteTest };
  