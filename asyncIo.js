let fs = require('fs')
let path = process.argv[2]

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  let result = data.split("\n").length - 1

  console.log(result);
})


// EXAMPLE SOLUTION

// const fs = require('fs')
//     const file = process.argv[2]
//
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
