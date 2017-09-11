let fs = require('fs')
let path = require('path')
let filePath = process.argv[2]
let ext = process.argv[3]

// console.log(path);
fs.readdir(filePath, 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  let filtered = data.forEach((el) => {
    if (path.extname(el) === `.${ext}`) {
      console.log(el);
    }
  })
})


// const fs = require('fs')
//     const path = require('path')
//
//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]
//
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
