var debug = require('debug')('bot:thread-settings');

module.exports = controller => {
  debug('Configuring Facebook thread settings...');

  controller.api.thread_settings.greeting('Hello! I\'m a bot!');
  controller.api.thread_settings.get_started('thread-get-started');
  controller.api.thread_settings.menu([
    {
      type: 'postback',
      title: 'Start',
      payload: 'thread-start'
    },
    {
      type: 'postback',
      title: 'Help',
      payload: 'thread-help'
    },
    {
      type: 'web_url',
      title: 'Bot Source',
      url: 'https://github.com/sebacruz/facebook-bot'
    }
  ]);
};
