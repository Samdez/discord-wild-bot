require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');
const client = new Discord.Client();
const { prefix } = require('./config');
// const request = require('./apiRequests');

const meetUrl = 'https://meet.google.com/gcq-hiur-nye';

const roles = {
  wilder: { id: 691925283900489749, mention: '<@&691925283900489749>' },
  trainer: { id: 691925225805316118, mention: '<@&691925225805316118>' },
  campusManager: { id: 691940032449085440, mention: '<@&691940032449085440>' },
};

client.login(process.env.TOKEN);
// const keys = require('keys').config()

client.once('ready', () => {
  const wildChannel = client.channels.cache.get('689026385892999169');
  const testChannel = client.channels.cache.get('775074059415060503');
  console.log('Ready!');
  testChannel.send('init test');
});

client.on('ready', () => {
  const wildChannel = client.channels.cache.get('689026385892999169');
  const testChannel = client.channels.cache.get('775074059415060503');
  cron.schedule('*/29 * * * *', () => {
    testChannel.send('');
  });
  cron.schedule('45 15 * * 1-5', () => {
    wildChannel.send(`${roles.wilder.mention} Time for the daily meet!\n See you on ${meetUrl}`);
  });
});

client.on('message', (msg) => {
  if (msg.content === `${prefix}meet`) {
    msg.reply(meetUrl);
  }
});
