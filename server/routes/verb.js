const express = require('express');
const router = express.Router();
const verbController = require('../controllers/verb');

const routes = {
  createVerb: router.post('/create', verbController.createVerb),
  getVerbs: router.get('/read', verbController.getVerbs)
}

module.exports = routes;