const getRandFile = require('./getRandFile');
const sendImage = require('./sendImage');

const susVC = async function(message, fetch) {
    let channelToJoin = message.member.voice.channel;
    let pathToAudio = './audios/' + getRandFile();
    if(channelToJoin) {
        channelToJoin.join().then(connection => {
            const dispatcher = connection.play(pathToAudio);
            dispatcher.on('finish', finish => {
                channelToJoin.leave();
            });
        });
    }
    else {
        sendImage(message, fetch);
    }
}
module.exports = susVC;