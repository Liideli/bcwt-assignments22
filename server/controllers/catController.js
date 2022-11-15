'use strict';

const catModel = require('../models/catModel');
const {validationResult} = require('express-validator');


const getCats = async (req, res) => {
  const cats = await catModel.getAllCats(res);
  res.json(cats);
};

const getCat = async (req, res) => {
  // Choose only one object with matching id
  const cat = await catModel.getCatById(res, req.params.catId);
  if (cat) {
    res.json(cat);
  }
  else {
    res.sendStatus(404);
  }
};

const modifyCat = async (req, res) => {
  const cat = req.body;
  if (req.params.catId) {
    cat.id = req.params.catId;
  }
  const result = await catModel.updateCatById(cat, res);
  if (result.affectedRows > 0) {
    res.json({message: 'cat modified: ' + cat.id});
  } else {
    res.status(404).json({message: 'nothing changed'});
  }
};

const createCat = async (req, res) => {
  const errors = validationResult(req);
  // TODO: fix empty file validation
  if (errors.isEmpty() && req.file) {
    const cat = req.body;
    cat.filename = req.file.filename;
    console.log('creating a new cat:', cat);
    const catId = await catModel.addCat(cat, res);
    res.status(201).json({message: 'cat created', catId});
  } else {
    console.log('validation errors', errors);
    res.status(400).json({message: 'cat creation failed',
                          errors: errors.array()});
  }
};

const deleteCat = async (req, res) => {
  const result = await catModel.deleteCatById(req.params.catId, res);
  console.log('cat deleted', result)
  if (result.affectedRows > 0) {
    res.json({message: 'cat deleted'});
  } else {
    res.status(404).json({message: 'cat was already deleted'});
  }
};

module.exports = {
  getCat,
  getCats,
  modifyCat,
  createCat,
  deleteCat
};