const Discord = require('discord.js');
const cron = require('node-cron');
const client = new Discord.Client();
// const config = require('./config');
// const request = require('./apiRequests');
require('dotenv').config();
client.login(process.env.TOKEN);
// const keys = require('keys').config()




client.once('ready', () => {
  const wildChannel = client.channels.cache.get('689026385892999169');
  const testChannel = client.channels.cache.get("775074059415060503");
  console.log('Ready!');
  testChannel.send('init test');
});

client.on('ready', () => {
  const wildChannel = client.channels.cache.get('689026385892999169');
  const testChannel = client.channels.cache.get("775074059415060503");
  cron.schedule('*/29 * * * *', () => {
    testChannel.send('')
  } );
  // cron.schedule('*/5 * * * * *', () => {
  //   testChannel.send('5s schedule test')
  // });
  cron.schedule('00 14 * * *',  () => {
    testChannel.send('FINALLY', {files: ['./img/itWorks.jpg']});
  })
  // cron.schedule('45 15 * * *', () => {
  //   wildChannel.send('Time for the daily meet! See you @ meet.google.com/gcq-hiur-nye');
  // });

  

})

