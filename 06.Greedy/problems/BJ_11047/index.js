const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0].split(' ')[0]) // 동전의 개수
let k = Number(input[0].split(' ')[1]) // 목표 금액

let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

let count = 0

for (let i = n - 1; i >= 0; i--) {
  count += parseInt(k / arr[i]) // 해당 동전 몇 개 사용해야 하는지
  k %= arr[i] // 해당 동전 거슬러 준 뒤 남은 금액
}

console.log(count)
