const getRandFile = require('./getRandFile');

const susVC = async function(message) {
    let EEAID = await message.author.id;
    let EEMem = message.guild.members.cache.get(EEAID);
    let pathToAudio = './audios/' + getRandFile();
    if(EEMem != null) {
        if(EEMem.voice.channel != null) {
            let channel = EEMem.voice.channel;
            channel.join().then(connection => {
                const dispatcher = connection.play(pathToAudio);
                dispatcher.on('finish', finish => {
                    channel.leave();
                });
            });
        }
    }
}
module.exports = susVC;