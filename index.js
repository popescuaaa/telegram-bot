'use strict'

const TelegramBot = require('node-telegram-bot-api'); // library import in Node.js
const Weather = require('weather-js'); 

const token = '578751631:AAGbBFePFXtg6Yng5vp33iipI1o0tlKJFro';

var weather_mood;
var city;
var temperature;
var we


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; 
    bot.sendMessage(chatId, resp);
  });

Weather.find({search: 'Bucharest, RO', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    city = result[0].location.name;
    temperature = result[0].current.temperature;
    weather_mood =  result[0].current.skytext;   
   
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
          bot.sendMessage(msg.chat.id,"The weather is: " + weather_mood + "\n"
                            +"The current temperature is: " + temperature );
  
      }
      
  
  });
