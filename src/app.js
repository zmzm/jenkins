const express = require('express');
const helmet = require('helmet');
const exchangeRoutes = require('./components/exchange/exchangeRoutes');
const limiter = require('./rateLimit');

const app = express();

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

app.use(limiter);
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ healthCheck: true });
});
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use('/api/currency-exchange', exchangeRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

module.exports = app;
