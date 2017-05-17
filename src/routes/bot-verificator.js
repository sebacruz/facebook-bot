var debug = require('debug')('bot:bot-verificator');

/**
 * Bot verification route.
 *
 * @param {object} webserver ExpressJS server
 * @param {object} controller Botkit controller
 * @return {object} ExpressJS server
 */
module.exports = (webserver, controller) => {
  debug('Configured GET /facebook/receive url for verification');

  webserver.get('/facebook/receive', (request, response) => {
    if (
      request.query['hub.mode'] === 'subscribe' &&
      request.query['hub.verify_token'] === controller.config.verify_token
    ) {
      response.send(request.query['hub.challenge']);
    } else {
      response.status(400);
      response.send('bad request');
    }
  });

  return webserver;
};
