const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number)
  arr.push([x, y])
}

arr.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let answer = ''

for (let i of arr) {
  answer += i[0] + ' ' + i[1] + '\n'
}

console.log(answer)
