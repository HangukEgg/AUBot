const checkKeyW = function(message, susArray) {
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