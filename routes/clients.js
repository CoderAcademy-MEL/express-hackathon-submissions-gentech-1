const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const Client = require('../models/Client');

// POST - CREATE A NEW CLIENT
// Router.post('/', express.json(), async (req, res, next) => {
//   try {
//   const { firstName, lastName, email } = req.body;
//   const newClient = new Client({
//     firstName,
//     lastName,
//     email
//   });
//   const savedClient = await newClient.save();
//   res.send(savedClient) } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });

// GET - LIST OF CLIENTS
//   Router.get('/', async (req, res, next) => {
//   const clients = await Client.find();
//   res.send(clients);
// });

module.exports = Router;