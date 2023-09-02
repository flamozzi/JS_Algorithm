const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let arr = input[0].split(' ').map(Number)

console.log(arr)

// arr.sort(function (a, b) {
//   return a - b
// })
arr.sort((a, b) => a - b)

let answer = ''
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + ' '
}

console.log(answer)
