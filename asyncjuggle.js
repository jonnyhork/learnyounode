const http = require('http')
const bl = require('bl')

let responses = []
let completeReq = 0


let getHttpRes = (idx) => {
  // console.log(idx);
  // console.log("PROCESS:", process.argv[2]);
  http.get(process.argv[2 + idx], (res) => {

    res.pipe(bl((err, data) => {
      responses[idx] = data.toString()
      completeReq++
      if (completeReq === 3) {
        responses.forEach(response => console.log(response))
      }

    }))
  })
}

for (let i = 0; i < 3; i++) {
  getHttpRes(i)
}


// POSSIBLE SOLUTION

/*
const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }

*/
