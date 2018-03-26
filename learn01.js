let request = require('request');
const fs =require('fs');
request.get('http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg')
            .pipe(fs.createWriteStream('learn01.png'))