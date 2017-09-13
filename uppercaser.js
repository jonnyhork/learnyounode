/*
Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.

*/

const http = require('http')
const map = require('through2-map')

let server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('request must a POST')
  }
  req.pipe(map((data) => {
    return data.toString().toUpperCase()
  })).pipe(res)

})
const port = process.argv[2]
server.listen(port)
