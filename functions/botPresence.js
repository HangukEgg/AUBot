const botPresence = function(client) {
    let servers = client.guilds.cache.size;
    client.user.setPresence({ 
        status: 'online',
        activity: [{
            name: `Over ${servers} Sussy Servers`,
            type: 'WATCHING' 
        }]
    })
};
module.exports = botPresence;