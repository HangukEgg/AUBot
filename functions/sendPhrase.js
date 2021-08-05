const sendPhrase = function(message) {
    var reArray = ["AMOGUS", "YOU'RE THE IMPOSTER!", "YOU ARE SUS!"]; 
    message.channel.send(reArray[Math.floor(Math.random()*3)]);
}
module.exports = sendPhrase;