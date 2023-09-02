const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

// set 변환 및 배열로 재할당
let uniqueArray = [...new Set(arr)]
uniqueArray.sort((a, b) => a - b)

// mapping
let map = new Map()
for (let i = 0; i < uniqueArray.length; i++) {
  map.set(uniqueArray[i], i)
}

let answer = ''

// get() 통해 dictionary key 추출
for (let i of arr) {
  answer += map.get(i) + ' '
}

console.log(answer)
