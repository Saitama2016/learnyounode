var fs = require('fs')

let filename = fs.readFileSync(process.argv[2])

let linesAmt = filename.toString().split('\n').length - 1;

console.log(linesAmt)