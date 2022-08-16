const sendImage = async function(message, fetch) {
    const keywordsArray = ['amogus', 'amongus', 'among us', 'imposter'];
    let randIndex = Math.floor(Math.random() * keywordsArray.length);

    let randKey = keywordsArray[randIndex];
    let randKey2 = keywordsArray[randIndex];
    while(randKey === randKey2) {
        randKey2 = keywordsArray[randIndex];
    }
    
    let keywords = randKey + " " + randKey2;
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORTOKEN}&contentfilter=off`;
    let fetching = await fetch(url);
    let json = await fetching.json();
    var index = Math.floor(Math.random() * json.results.length);
    message.channel.send(json.results[index].url);
}
module.exports = sendImage;