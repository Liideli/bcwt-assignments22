'use strict';
// userController

const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');


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
  /*const user = req.body;
  if (req.params.catId) {
    user.id = req.params.catId;
  }
  const result = await userModel.updateUserById(user, res);
  if (result.affectedRows > 0) {
    res.json({message: 'cat modified: ' + user.id});
  } else {
    res.status(404).json({message: 'nothing changed'});
  }*/
};

const createUser = async (req, res) => {
  console.log('Creating a new user:', req.body);
  const newUser = req.body;
  if (!newUser.role) {
    // default user role (normal user)
    newUser.role = 1;
  }
  const errors = validationResult(req);
  console.log('validation errors', errors);
  if (errors.isEmpty()) {
    const result = await userModel.addUser(newUser, res);
    res.status(201).json({message: 'user created', userId: result});
  } else {
    res.status(400).json({
      message: 'user creation failed',
      errors: errors.array()
    });
  }
};
  
const deleteUser = (req, res) => {
  /*const result = await catModel.deleteCatById(req.params.catId, res);
  console.log('cat deleted', result)
  if (result.affectedRows > 0) {
    res.json({message: 'cat deleted'});
  } else {
    res.status(404).json({message: 'cat was already deleted'});
  }*/
};

const checkToken = (req, res) => {
  res.json({user: req.user});
};

module.exports = {
  getUsers,
  getUser,
  modifyUser,
  createUser,
  deleteUser,
  checkToken
};