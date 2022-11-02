'use strict';
// userRoutes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// TODO:
// - Create user routes
// - Create user controller
// - Use the data avilable in userModel.js

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', (req, res) => {
  res.send('From this endpoint you can add more users');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can replace users');
}); 

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users');
});


module.exports = router;