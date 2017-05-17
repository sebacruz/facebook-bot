const Botkit = require('botkit');

if (!process.env.ACCESS_TOKEN) {
  throw new Error('ERROR: Specify a Facebook `ACCESS_TOKEN` in environment.');
}

if (!process.env.VERIFY_TOKEN) {
  throw new Error('ERROR: Specify a Facebook `VERIFY_TOKEN` in environment.');
}

const controller = Botkit.facebookbot({
  receive_via_postback: true,
  verify_token: process.env.VERIFY_TOKEN,
  access_token: process.env.ACCESS_TOKEN
});

require('./src/webserver')(controller);

require('./src/subscribe-events')(controller);

require('./src/thread-settings')(controller);

require('./src/skills/postbacks-handler')(controller);
