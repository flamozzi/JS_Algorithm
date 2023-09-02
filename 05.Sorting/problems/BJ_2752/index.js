const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])

let arr = []

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

arr.sort((a, b) => a - b)

let answer = ''

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + '\n'
}

console.log(answer)
