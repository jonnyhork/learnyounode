const net = require('net')


let server = net.createServer((socket) => {

  let date = new Date()

  // date
  const year = date.getFullYear().toString()
  const monthRaw = (date.getMonth() + 1).toString()
  const dayRaw = date.getDate().toString()

  let monthAdj = monthRaw < 10 ? `0${monthRaw}` : monthRaw
  let dayAdj = dayRaw < 10 ? `0${dayRaw}` : dayRaw

  // time
  const hoursRaw = date.getHours().toString()
  const minutesRaw = date.getMinutes().toString()

  let hoursAdj = hoursRaw < 10 ? `0${hoursRaw}` : hoursRaw
  let minutesAdj = minutesRaw < 10 ? `0${minutesRaw}` : minutesRaw

  let currentDate = `${year}-${monthAdj}-${dayAdj} ${hoursAdj}:${minutesAdj}`

  socket.write(currentDate + '\n')
  socket.end()
})


const port = process.argv[2]

server.listen(port, () => {
  console.log("server is listening on:", port);
})


// POSSIBLE SOLUTION

/*
const net = require('net')

   function zeroFill (i) {
     return (i < 10 ? '0' : '') + i
   }

   function now () {
     const d = new Date()
     return d.getFullYear() + '-' +
       zeroFill(d.getMonth() + 1) + '-' +
       zeroFill(d.getDate()) + ' ' +
       zeroFill(d.getHours()) + ':' +
       zeroFill(d.getMinutes())
   }

   const server = net.createServer(function (socket) {
     socket.end(now() + '\n')
   })

   server.listen(Number(process.argv[2]))




*/
