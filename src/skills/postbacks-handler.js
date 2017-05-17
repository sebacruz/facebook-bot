const greetUser = require('../actions/greet-user');
const startConversation = require('../actions/start-conversation');
const chooiceACat = require('../actions/choice-a-cat');

module.exports = controller => {
  controller.on('facebook_postback', (bot, message) => {
    switch (message.payload) {
      case 'thread-get-started':
        greetUser(bot, message);
        startConversation(bot, message);
        break;

      case 'thread-start':
        startConversation(bot, message);
        break;

      case 'thread-help':
        break;

      case 'choice-cat':
        chooiceACat(bot, message);
        break;

      case 'choice-british-shorthair':
        bot.reply(message, 'choice-british-shorthair');
        break;

      case 'choice-persian-cat':
        bot.reply(message, 'choice-persian-cat');
        break;

      case 'choice-maine-coon':
        bot.reply(message, 'choice-maine-coon');
        break;

      case 'choice-bombay':
        bot.reply(message, 'choice-bombay');
        break;

      case 'choice-siamese':
        bot.reply(message, 'choice-siamese');
        break;

      default:
        break;
    }
  });
};
