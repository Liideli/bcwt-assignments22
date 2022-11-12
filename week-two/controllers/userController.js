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
  const user = req.body;
  if (req.params.catId) {
    user.id = req.params.catId;
  }
  const result = await catModel.updateCatById(user, res);
  if (result.affectedRows > 0) {
    res.json({message: 'cat modified: ' + user.id});
  } else {
    res.status(404).json({message: 'nothing changed'});
  }
};

const createUser = async (req, res) => {
  console.log('Creating new user: ', req.body);
  const newUser = req.body;
  const result = await userModel.addUser(newUser, res);
  res.status(201).json({userId: result});
};
  
const deleteUser = (req, res) => {
  const result = await catModel.deleteCatById(req.params.catId, res);
  console.log('cat deleted', result)
  if (result.affectedRows > 0) {
    res.json({message: 'cat deleted'});
  } else {
    res.status(404).json({message: 'cat was already deleted'});
  }
};

module.exports = {
  getUsers,
  getUser,
  modifyUser,
  createUser,
  deleteUser
};