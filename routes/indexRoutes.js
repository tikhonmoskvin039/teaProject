const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Index = require('../views/Index');

route.get('/', (req, res) => {
  res.redirect('/teas')
})

module.exports = route;
