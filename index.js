const {Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,]});
const dotenv = require('dotenv'); 
dotenv.config();
const fetch = require('node-fetch');
client.login(process.env.TOKEN);

const checkKeyW = require("./functions/checkKeyW");
const sendImage = require("./functions/sendImage");
const botPresence = require("./functions/botPresence");
const sendPhrase = require("./functions/sendPhrase");
const susVC = require("./functions/susVC");


client.on('messageCreate', (message) => {
    if(checkKeyW(message)) {
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber) {
            case 0:
                sendImage(message, fetch);
                break;
            case 1:
                sendPhrase(message);
                break;
            case 2: 
                susVC(message, fetch);
        }
    }
    return;
})

client.on('ready', () => {
    console.log("\ngood to go\n\nServers:");
    client.guilds.cache.forEach(g => {
        console.log(g.name);
    })
    console.log("\n");
    botPresence(client);
}); 