let path = process.argv[2]

let fs = require('fs');
let contents = fs.readFileSync(path, "utf8").split("\n").length - 1
console.log(contents);
