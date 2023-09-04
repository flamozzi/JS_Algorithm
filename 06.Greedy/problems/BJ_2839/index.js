const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])
let count = 0
let flag = false

while (n >= 0) {
  if (n == 0 || n % 5 == 0) {
    count += parseInt(n / 5)
    console.log(count)
    flag = true
    break
  }
  n -= 3
  count += 1
}
if (!flag) {
  console.log(-1)
}
