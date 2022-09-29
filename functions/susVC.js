const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const getRandFile = require('./getRandFile');
const sendImage = require('./sendImage');

const susVC = async function(message, fetch) {
    let pathToAudio = './audios/' + getRandFile();
    try {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator
        })

        const player = createAudioPlayer();
        const resource = createAudioResource(pathToAudio);

        player.play(resource, {seek: 0, volume: 1.0})
        connection.subscribe(player);
        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        })
    }
    catch(e) {
        console.log(e);
        sendImage(message, fetch);
    }
}
module.exports = susVC;