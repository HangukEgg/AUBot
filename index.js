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

const susArray = ["sus", "among us", "amongus", "imposter",
                  "crewmate", "vent", "report", "emergency meeting",
                  "task", "amogus"];

const keywordsArray = ['amogus', 'amongus', 'among us', 'imposter'];

const reArray = ["AMOGUS", "YOU'RE THE IMPOSTER!", "YOU ARE SUS!"]; 

client.on('messageCreate', (message) => {
    if(checkKeyW(message, susArray)) {
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber) {
            case 0:
                sendImage(message, fetch, keywordsArray);
                break;
            case 1:
                sendPhrase(message, reArray);
                break;
            case 2: 
                susVC(message, fetch, keywordsArray);
                break;
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