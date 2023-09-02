const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = input[0]
// 0~9 count array 선언 및 0으로 초기화
let count = Array(10).fill(0)

for (let i of n) {
  count[Number(i)]++
}

let answer = ''

// 9부터 0까지 count 값 확인하며 빈도 만큼 출력
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < count[i]; j++) {
    answer += i
  }
}

console.log(answer)
