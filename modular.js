let myModule = require('./moduleFn')

function filter(err, data) {
  if (err) {
    throw err
  } else {
    myModule(data)
  }

}

// console.log(filter())
