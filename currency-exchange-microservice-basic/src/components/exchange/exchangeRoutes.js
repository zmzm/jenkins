const express = require('express');
const ExchangeController = require('./exchangeController');

const exchangeRoute = express.Router();
const exchangeController = new ExchangeController();

exchangeRoute.get('/from/:from/to/:to', exchangeController.getExchange);

module.exports = exchangeRoute;
