const fs = require('fs');
const path = require("path");

const getRandFile = function() {
    const auddir = fs.readdirSync('./audios/')
    .map(file => {
            return path.join(file);
    });
    return auddir[Math.floor(Math.random() * auddir.length)];
}
module.exports = getRandFile;