const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config');
// const request = require('./apiRequests');
require('dotenv').config();
// const keys = require('keys').config()



client.once('ready', () => {
  console.log('Ready!');
});

client.on('ready', () => {
  const wildChannel = client.channels.cache.find(channel => channel.id === '689026385892999169');
  const testChannel = client.channels.cache.find(channel => channel.id === '775074059415060503')

  let messageHasBeenSent = false;

  const getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();


    if (hours === 09 && minutes === 00) {
      if (!messageHasBeenSent) {
        testChannel.send('Good morning!');
        messageHasBeenSent = true;
        // const dailyPost = request.programmerHumorRequest;
        // testChannel.send(dailyPost);
      }
    }
    if (hours === 17 && minutes === 15) {
      if (!messageHasBeenSent) {
        testChannel.send('Time for the daily meet! See you @ meet.google.com/gcq-hiur-nye');
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

client.login(process.env.TOKEN);
console.log(process.env.TOKEN)
