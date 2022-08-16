const sendImage = async function(message, fetch) {
    const keywordsArray = ['amogus', 'amongus', 'among us', 'imposter'];

    let randKey = keywordsArray[Math.floor(Math.random() * keywordsArray.length)];
    let randKey2 = keywordsArray[Math.floor(Math.random() * keywordsArray.length)];
    while(randKey === randKey2) {
        randKey2 = keywordsArray[Math.floor(Math.random() * keywordsArray.length)];
    }
    
    let keywords = randKey + " " + randKey2;
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORTOKEN}&contentfilter=off`;
    let fetching = await fetch(url);
    let json = await fetching.json();
    var index = Math.floor(Math.random() * json.results.length);
    message.channel.send(json.results[index].url);
}
module.exports = sendImage;