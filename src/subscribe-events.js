const request = require('request');
const debug = require('debug')('bot:subscribe-events');

module.exports = controller => {
  debug('Subscribing to Facebook events...');

  request.post('https://graph.facebook.com/me/subscribed_apps?access_token=' + controller.config.access_token,
    (err, response, body) => {
      if (err) {
        debug('Could not subscribe to page messages!');

        throw new Error(err);
      } else {
        debug('Successfully subscribed to Facebook events:', body);

        controller.startTicking();
      }
    });
};
