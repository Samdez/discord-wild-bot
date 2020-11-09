const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.once('ready', () => {
  console.log('Ready!');
});

client.on('ready', () => {
  const testChannel = client.channels.cache.find(channel => channel.id === '775074059415060503');

  let messageHasBeenSent = false;

  const getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();


    if (hours === 08 && minutes === 30) {
      if (!messageHasBeenSent) {
        testChannel.send('Good morning ');
        messageHasBeenSent = true;
      }

    }
    if (hours === 17 && minutes === 00) {
      messageHasBeenSent = false;
    }
  }

  setInterval(() => {
    getTime();
  }, 1000)

  setInterval(() => {
    messageHasBeenSent = false;
  })

  testChannel.send('aaalmost working')
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(config.token);
