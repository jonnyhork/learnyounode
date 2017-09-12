// const myModule = require('./moduleFn')
// const filePath = process.argv[2]
// const ext = process.argv[3]
//
// myModule(filePath, ext, (err, data) => {
//   if (err) {
//     throw err
//   }
//
//   data.forEach((el) => {
//     console.log(el)
//   })
// })







const filterFunction = require('./moduleFn')
const dir = process.argv[2]
const ext = process.argv[3]

filterFunction(dir, ext, (err, files) => {
  if (err) {
    throw err
  }
  files.forEach((file) => console.log(file))

})
