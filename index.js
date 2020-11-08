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

    //setting seconds for test
    const seconds = time.getSeconds();


    if (hours === 22 && minutes === 51) {
      if (!messageHasBeenSent) {
        testChannel.send('Time for the daily meet!');
        messageHasBeenSent = true;
      }

    }
  }

  setInterval(() => {
    getTime();
  }, 1000)

})

client.login(config.token);
