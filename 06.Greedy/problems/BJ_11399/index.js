const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0]) // 사람의 수
let arr = input[1].split(' ').map(Number) // 모든 처리 시간 입력받기

// 오름차순 정렬
arr.sort((a, b) => a - b)

let answer = 0
let summary = 0

for (let i = 0; i < n; i++) {
  summary += arr[i] // i번째 사람이 기다린 총 시간
  answer += summary // 지금까지 소요된 총 시간
}

console.log(answer)
