const request = require('request');

/**
 * Sends an "greetings" message the user.
 *
 * @param {object} bot
 * @param  {message} message
 * @return void
 */
module.exports = (bot, message) => {
  const query = {
    uri: `https://graph.facebook.com/v2.6/${message.user}`,
    qs: {
      access_token: process.env.ACCESS_TOKEN
    }
  };

  request.get(query, (error, response, body) => {
    const user = JSON.parse(body);

    bot.reply(message, `Hello ${user.first_name}! How are you?`);
  });
};
