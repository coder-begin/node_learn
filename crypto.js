const fs = require('fs');
const crypto  = require('crypto ')
let input = fs.createReadStream('./mytest.txt');
let output = fs.createWriteStream('./password.txt');
let Cipher = crypto.createCipher('aes192', '123456');

input.pipe(Cipher).pipe(output);


