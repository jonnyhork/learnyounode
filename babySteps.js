// console.log(process.argv);

let cliInput = process.argv


let sum = 0

for (let i = 2; i < cliInput.length; i++) {

  sum += +(process.argv[i])

}

console.log(sum)
