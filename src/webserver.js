const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('bot:webserver');

module.exports = controller => {
  const server = express();

  server.set('port', (process.env.PORT || 3000));

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));

  server.listen(server.get('port'), function () {
    debug(`is running on port ${server.get('port')}`);
  });

  require('./routes/event-handler')(server, controller);
  require('./routes/bot-verificator')(server, controller);

  controller.webserver = server;

  return server;
};
