/*
Write an HTTP server that serves JSON data when it receives a GET request
 to the path '/api/parsetime'. Expect the request to contain a query string
 with a key 'iso' and an ISO-format time as the value.

 For example:

 /api/parsetime?iso=2013-08-10T12:10:15.474Z

 The JSON response should contain only 'hour', 'minute' and 'second'
 properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

 Add second endpoint for the path '/api/unixtime' which accepts the same
 query string but returns UNIX epoch time in milliseconds (the number of
 milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 For example:

    { "unixtime": 1376136615474 }

 Your server should listen on the port provided by the first argument to
 your program.

MY URL OBJECT LOOKS LIKE:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?iso=2017-09-13T04:28:37.665Z',
  query: { iso: '2017-09-13T04:28:37.665Z' },
  pathname: '/api/unixtime',
  path: '/api/unixtime?iso=2017-09-13T04:28:37.665Z',
  href: '/api/unixtime?iso=2017-09-13T04:28:37.665Z' }


*/


const http = require('http')
const url = require('url')

let createTimeObj = time => {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

let getUnixtime = time => {
  return {
    "unixtime": time.getTime()
  }
}

let server = http.createServer((req, res) => {

  let urlObj = url.parse(req.url, true)
  // console.log(urlObj);
  let time = new Date(urlObj.query.iso)
  // console.log(time.getTime()); unixtime

  let result

  if (urlObj.pathname === '/api/unixtime') {
    result = getUnixtime(time)
  } else if (urlObj.pathname === '/api/parsetime') {
    result = createTimeObj(time)
  }

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }


}) // end of createServer

const port = process.argv[2]
server.listen(port)



// SOLUTION USES REG-EX
/*
if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
*/
