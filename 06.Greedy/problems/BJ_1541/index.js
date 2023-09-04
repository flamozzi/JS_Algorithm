const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt'
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split('\n')

let minusGroups = input[0].split('-')
let answer = 0

for (let i = 0; i < minusGroups.length; i++) {
  let currentGroup = minusGroups[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b)
  if (i == 0) {
    answer += currentGroup // 처음과 마지막 문자는 숫자이기 때문에 첫 그룹은 무조건 +
  } else {
    answer -= currentGroup
  }
}

console.log(answer)
