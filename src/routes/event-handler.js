var debug = require('debug')('bot:event-handler');

/**
 * Facebook event hadle route.
 *
 * @param {object} webserver ExpressJS server
 * @param {object} controller Botkit controller
 * @return {object} ExpressJS server
 */
module.exports = (webserver, controller) => {
  debug('Configured POST /facebook/receive url for receiving events');

  webserver.post('/facebook/receive', (request, response) => {
    // NOTE: we should enforce the token check here

    response.status(200);
    response.send('ok');

    var bot = controller.spawn({});

    controller.handleWebhookPayload(request, response, bot);
  });

  return webserver;
};
