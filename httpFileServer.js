/*
Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.

*/

const fs = require('fs')
const http = require('http')

let server = http.createServer((req, res) => {

  const filePath = process.argv[3]

  fs.createReadStream(filePath).pipe(res)

  // let data = fs.createReadStream(filePath).pipe(res)
  // res.on('data', (data) => {
  //   console.log(data);
  // })

})

const port = process.argv[2]

server.listen(port, () => {
  console.log("server is listening on ", port);
})







// POSSIBLE SOLUTION

/*
const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/
