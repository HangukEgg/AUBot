const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const getRandFile = require('./getRandFile');
const sendImage = require('./sendImage');

const susVC = async function(message, fetch, keywordsArray) {
    let pathToAudio = './audios/' + getRandFile();
    if(message.member.voice.channelId == null) sendImage(message, fetch, keywordsArray);
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
module.exports = susVC;