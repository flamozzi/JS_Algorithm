const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i <= n; i++) {
  arr.push(input[i])
}

arr = [...new Set(arr)] // 중복 제거

arr.sort((a, b) => {
  // 길이순 정렬
  if (a.length != b.length) return a.length - b.length
  else {
    // 사전순 정렬
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
  }
})

for (let i of arr) {
  console.log(i)
}
