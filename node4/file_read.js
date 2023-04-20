// const fs = require('fs');

// const file = fs.readFileSync('text.txt');
// console.log(file);
// console.log(file.toString());

// const fs = require('fs');

// fs.readFile('text.txt', (error, file) => {
//     console.log(file);
//     console.log(file.toString());
// })

// const fs = require('fs');

// const a = readFileSync('a.txt');
// const b = readFileSync('b.txt');
// const c = readFileSync('c.txt');

// console.log(a, b, c);

const fs = require('fs');
const async = require('async');

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);}
],(error, results) => {
    console.log(results);
})