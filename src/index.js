const http = require('http');
const normalizePort = require('normalize-port');
const app = require('./app');
const logger = require('./logger');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, async () => {
  logger.info(`listening on ${port}`);
});
