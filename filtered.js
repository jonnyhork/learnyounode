let fs = require('fs')
let path = require('path')
let filePath = process.argv[2]
let ext = process.argv[3]

// console.log(path);
fs.readdir(filePath, 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  // console.log("data is: ", data);
  // console.log("ext is: ", `.${ext}`);

  let filtered = data.forEach((el) => {
    if (path.extname(el) === `.${ext}`) {
      console.log(el);
    }

    // console.log("filteredData: ", filtered);
  })

  // let result = path.extname(data[0])
  // console.log("extname result: ", result);
})
