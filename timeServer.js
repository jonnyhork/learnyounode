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

// m < 10 ? `0${month}` : m
