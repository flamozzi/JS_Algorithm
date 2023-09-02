const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(' ')[0])
  let name = input[i].split(' ')[1]
  arr.push([age, name])
}

arr.sort((a, b) => a[0] - b[0])

let answer = ''

for (let i of arr) {
  answer += i[0] + ' ' + i[1] + '\n'
}

console.log(answer)
