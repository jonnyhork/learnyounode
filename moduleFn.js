// let fs = require('fs')
// let path = require('path')
//
// function filterFiles(filePath, ext, cb) {
//
//   fs.readdir(filePath, 'utf8', (err, data) => {
//     if (err) {
//       return cb(err)
//     }
//     data = data.filter((el) => {
//       return path.extname(el) === `.${ext}`
//     })
//
//     cb(null, data)
//   })
// }
//
// module.exports = filterFiles









const fs = require('fs')
const path = require('path')


function filterFiles(dir, ext, callback) {
  fs.readdir(dir, 'utf8', (err, files) => {
    if (err) {
      return callback(err)
    }
    files = files.filter((element) => {
      return path.extname(element) === `.${ext}`
    })
    callback(null, files)
  })
}

module.exports = filterFiles
