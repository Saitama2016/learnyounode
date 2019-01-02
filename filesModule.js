let fs = require('fs');
let path = require('path');

module.exports = function(dirname, ext, callback) {
    let extension = '.' + ext;
    fs.readdir(dirname, function(err, files) {
        if (err) {
            callback(err, null)
        } else {
            result = [];
            files.forEach(function(entry) {
                if (path.extname(entry) === extension) {
                    result.push(entry);
                }
            });
            callback(null, result)
        }
    })
}