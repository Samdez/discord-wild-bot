const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const request = require('./apiRequests');


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


    if (hours === 09 && minutes === 25) {
      if (!messageHasBeenSent) {
        testChannel.send('Good morning!');
        messageHasBeenSent = true;
        const dailyPost = request.programmerHumorRequest();
        testChannel.send(dailyPost);
      }
    }
    if (hours === 16 && minutes === 45) {
      if (!messageHasBeenSent) {
        testChannel.send('Time for the daily meet!');
        messageHasBeenSent = true;
      }
    }
    if ((hours === 09 && minutes === 05) || (hours === 17 && minutes === 00)) {
      messageHasBeenSent = false;
    }
  }

  setInterval(() => {
    getTime();
  }, 1000)

})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(config.token);
