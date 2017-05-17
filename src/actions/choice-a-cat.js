module.exports = (bot, message) => {
  var attachment = {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        {
          title: 'British Shorthair',
          subtitle: 'Gray cat',
          image_url: 'https://i.imgur.com/UDtpmLQ.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Shorthair!',
              payload: 'choice-british-shorthair'
            }
          ]
        },
        {
          title: 'Persian cat',
          subtitle: 'Fluffy kitten',
          image_url: 'https://i.imgur.com/OyKasz5.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Persian!',
              payload: 'choice-persian-cat'
            }
          ]
        },
        {
          title: 'Maine Coon',
          subtitle: 'Big fluffy cat',
          image_url: 'https://i.imgur.com/tuHW0Ru.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Maine!',
              payload: 'choice-maine-coon'
            }
          ]
        },
        {
          title: 'Bombay',
          subtitle: 'Little panters',
          image_url: 'https://i.imgur.com/9fTU7hi.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Panter!',
              payload: 'choice-bombay'
            }
          ]
        },
        {
          title: 'Siamese',
          subtitle: 'Monkey face cat',
          image_url: 'https://i.imgur.com/AugQ8fo.jpg',
          buttons: [
            {
              type: 'postback',
              title: 'Monkey!',
              payload: 'choice-siamese'
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
