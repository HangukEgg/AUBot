const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv'); 
dotenv.config();
const fetch = require("node-fetch");
client.login(process.env.TOKEN);

const checkKeyW = require("./functions/checkKeyW");
const sendImage = require("./functions/sendImage");
const botPresence = require("./functions/botPresence");
const sendPhrase = require("./functions/sendPhrase");

var checkPhrase = false;

client.on('message', message => {
    if(checkKeyW(message)) {
        if(checkPhrase) {
            if(Math.floor(Math.random())*2 == 1) {
                checkPhrase = false;
                sendImage(message);
                return;
            }
        }
        if(Math.floor(Math.random()*2) == 1) {
            checkPhrase = true;
            sendPhrase(message);
            return;
        }
        else {
            sendImage(message, fetch);
            return;
        }
    }
    return;
})

client.on('ready', () => {
    console.log("good to go");
    client.guilds.cache.forEach(g => {
        console.log(g.name);
    })
    setInterval(() => botPresence(client), 15 * 60 * 1000);
}); 