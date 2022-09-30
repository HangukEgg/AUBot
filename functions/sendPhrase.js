const sendPhrase = function(message, reArray) {
    message.channel.send(reArray[Math.floor(Math.random()*3)]);
}
module.exports = sendPhrase;