/*
Write the String contents of each
"data" event from the response to a new line on the console (stdout).
*/

const http = require('http')
const url = process.argv[2] // first cli arg, url

http.get(url, (response) => {
  // console.log('RESPONSE = ', response);
  response.setEncoding('utf8')
  response.on("data", (data) => {
    console.log(data);
  })
  // response.on('error', console.error)
})
// .on('error', console.error)







// POSSIBLE SOLUTION

/*
const http = require('http')

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

*/
