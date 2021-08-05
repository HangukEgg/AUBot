const botPresence = function(client) {
    let servers = client.guilds.cache.size;
    client.user.setPresence({ 
        activity: {
            name: 'Over ' + servers + 'Sussy Servers',
            type: 'WATCHING' 
        },
        status: "online"
    })
    .catch(console.error)
};
module.exports = botPresence;