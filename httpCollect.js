/*
Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.

*/

const http = require('http')
const bl = require('bl')
const url = process.argv[2]

http.get(url, (res) => {
  res.setEncoding('utf8')
  res.pipe(bl((err, data) => {
    if (err) {
      throw err
    }
    // console.log("DATA IS:", data);
    console.log(data.length)
    console.log(data.toString())
  }))

})
