'use strict'

const TelegramBot = require('node-telegram-bot-api'); // library import in Node.js

const token = '578751631:AAGbBFePFXtg6Yng5vp33iipI1o0tlKJFro';


const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1]; 

 
  bot.sendMessage(chatId, resp);
});



bot.on('message', (msg) => {
  const chatId = msg.chat.id;

    var hi = "hi";
    var bye = "bye";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
    else if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    } else {
        
    }


});



