const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config');
// const request = require('./apiRequests');
require('dotenv').config();
client.login(process.env.TOKEN);
// const keys = require('keys').config()





// client.once('ready', () => {
  
//   console.log(testChannel);
//   console.log('Ready!');
//   testChannel.send('HEYYY');
// });

client.on('ready', () => {
  const wildChannel = client.channels.cache.get('689026385892999169');
  const testChannel = client.channels.cache.get("775074059415060503");

  let messageHasBeenSent = false;

  const getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();


    if (hours === 08 && minutes === 55) {
      if (!messageHasBeenSent) {
        wildChannel.send('Good morning Wilders!');
        messageHasBeenSent = true;
        // const dailyPost = request.programmerHumorRequest;
        // testChannel.send(dailyPost);
      }
    }
    if (hours === 19 && minutes === 30) {
      if (!messageHasBeenSent) {
        testChannel.send('HAHAHA');
        testChannel.send('FINALLY',   {files: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXurBGvYU8Wzw-2e5hKpCl4amPAkQtmaWTTA&usqp=CAU']});
        // wildChannel.send('Time for the daily meet! See you @ meet.google.com/gcq-hiur-nye');
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

console.log(process.env.TOKEN)
