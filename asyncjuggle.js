const http = require('http')
const bl = require('bl')
const urls = [process.argv[2], process.argv[3], process.argv[4]]

let responses = []
let completeReq = 0

for (let url of urls) {

  http.get(url, (res) => {

    res.pipe(bl((err, data) => {
      responses.push(data.toString())
      completeReq++
      // console.log(`${completeReq} \n\n`)
      // console.log(data.toString())
      // console.log("\n\nRESPONSES = ", responses);
      if (completeReq === urls.length) {
        responses.forEach((el) => console.log(el))
      }
    }))

  })


}



// // http.get(url1, (res1) => {
// res1.pipe(bl((err, data1) => {
// if (err) {
//   throw err
// }
// console.log(data1.toString())
// }))
// })









// http.get(url1, (res1) => {
//   res1.pipe(bl((err, data1) => {
//     if (err) {
//       throw err
//     }
//     console.log(data1.toString())
//   }))
// })
