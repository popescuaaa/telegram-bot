'use strict'

const TelegramBot = require('node-telegram-bot-api'); // library import in Node.js
const Weather = require('weather-js'); 

const token = '578751631:AAGbBFePFXtg6Yng5vp33iipI1o0tlKJFro';

var weather_forecast;
var location;
var wetaher;


const bot = new TelegramBot(token, {polling: true});

Weather.find({search: 'Bucharest, RO', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    weather_forecast = JSON.parse(JSON.stringify(result, null, 2));

    
});





bot.onText(/\/echo (.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1]; 

 
  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

    var commands =['hi','bye','weather'];
    if (msg.text.toString().toLowerCase().indexOf(commands[0]) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user"); 
        // here is a perfect match with the message 'hi'
    } 
    if (msg.text.toString().toLowerCase().includes(commands[1])) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
        // but here, if the message contains 'bye'  
    }
    if (msg.text.toString().toLowerCase().includes(commands[2])) {
        bot.sendMessage(msg.chat.id,weather_forecast);
    }
    

});


