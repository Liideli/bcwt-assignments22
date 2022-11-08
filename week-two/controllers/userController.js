'use strict';
// userController

const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

const getUser = async (req, res) => {
    // Choose only one object with matching id
  const user = await userModel.getUserById(req.params.userId, res);
  if (user) {
    res.json(user);
  }
  else {
    res.sendStatus(404);
  }
};

const modifyUser = (req, res) => {
  
};

const createUser = async (req, res) => {
  console.log('Creating new user: ', req.body);
  const newUser = req.body;
  const result = await userModel.addUser(newUser, res);
  res.status(201).json({userId: result});
};
  
const deleteUser = (req, res) => {
  
};

module.exports = {
  getUsers,
  getUser,
  modifyUser,
  createUser,
  deleteUser
};