var filesModule = require('./filesModule')

let directory = process.argv[2];
let ext = process.argv[3];

filesModule(directory, ext, function(err, files) {
    if (err) {
        console.log(err)
    }
    files.forEach(file => console.log(file))
})