module.exports = (bot, message) => {
  var attachment = {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        // KITTEN
        {
          title: 'Cat',
          subtitle: 'What\'s new pussycat? whoa oh!',
          image_url: 'http://i.imgur.com/Sn7HwIy.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Cat',
              payload: 'choice-cat'
            }
          ]
        },
        // PUPPY
        {
          title: 'Dog',
          subtitle: 'D O double G',
          image_url: 'http://i.imgur.com/PbBpdMP.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Dog',
              payload: 'choice-dog'
            }
          ]
        }
      ]
    }
  };

  bot.reply(message, {
    attachment: attachment
  });
};
