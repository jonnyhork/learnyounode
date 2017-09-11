let fs = require('fs')
let path = require('path')
let filePath = process.argv[2]
let ext = process.argv[3]

fs.readdir(filePath, 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  data.forEach((el) => {
    if (path.extname(el) === `.${ext}`) {
      console.log(el);
    }
  })
})

function filterFiles(filePath, ext, cb) {

}

module.exports = {
    filterFiles:
