require('dotenv').config();
const Discord = require('discord.js');
const cron = require('node-cron');
const client = new Discord.Client();
// const config = require('./config');
// const request = require('./apiRequests');

const meetUrl = 'https://meet.google.com/gcq-hiur-nye';

const rolesId = {
  wilder: 691925283900489749,
  trainer: 691925225805316118,
  campusManager: 691940032449085440,
};

function mention(roleId) {
  return `<@&${roleId}>`;
}

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
    wildChannel.send(`<@&${mention(rolesId.wilder)}> Time for the daily meet!\n See you on ${meetUrl}`);
  });
});
