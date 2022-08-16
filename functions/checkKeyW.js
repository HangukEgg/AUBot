const checkKeyW = function(message) {
    var susArray = ["sus", "among us", "amongus", "imposter",
                    "sus", "crewmate", "vent", "report", "emergency meeting",
                    "task", "amogus"];
    if(message.author.bot) return;
    let content = message.content.toLowerCase();
    for(var i = 0; i < susArray.length; i++) {
        if(content.includes(susArray[i])) { 
            return true;
        }
    }
    return false;
}
module.exports = checkKeyW;