const getRandFile = require('./getRandFile');
const sendImage = require('./sendImage');

const susVC = async function(message, fetch) {
    let channelToJoin = message.member.voice.channel;
    let pathToAudio = './audios/' + getRandFile();
    if(channelToJoin) {
        try { // try in case the bot does not have access to vc
            channelToJoin.join().then(connection => {
                const dispatcher = connection.play(pathToAudio);
                dispatcher.on('finish', finish => {
                    channelToJoin.leave();
                });
            });
        }
        catch(e){sendImage(message, fetch);}
    }
    else {
        sendImage(message, fetch);
    }
}
module.exports = susVC;