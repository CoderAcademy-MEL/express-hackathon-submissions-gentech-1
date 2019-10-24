const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const Trainer = require('../models/Trainer');

// POST - CREATE A NEW TRAINER
Router.post('/', express.json(), async (req, res, next) => {
  try {
  const { firstName, lastName, email, mobile, gender, dob, password, roles } = req.body;
  const newTrainer = new User({
    firstName,
    lastName,
    email,
    mobile,
    gender,
    dob,
    password,
    roles
  });
  const savedUser = await newTrainer.save();
  res.send(savedUser) } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// GET - SHOW ALL TRAINERS
// Router.get('/', async (req, res, next) => {
//   const trainers = await User.find();
//   res.send(trainers);
// });

// GET - SHOW ONE TRAINER
// Router.get('/:id', async (req, res, next) => {
//   const { id } = req.params
//   const showTrainer = await Trainer.findById(id).populate('clients');
//   res.send(showTrainer);
// });

module.exports = Router;