// 선택 정렬, 버블 정렬, 삽입 병렬은 worst case O(n^2)의 시간복잡도를 가지기에 비효율적임
// 병합 정렬(분할정복, divide and conquer)은 현존하는 정렬 알고리즘 중 효율적인 정렬알고리즘이며 O(n log n)의 시간복잡도를 보장함

// JavaScript를 사용할 때는 정렬 라이브러리를 사용하면 됨. 기본 제공 라이브러리도 병합정렬과 같은 시간복잡도인 O(n log n)을 보장함
// -> 내림차순, 오름차순 등 구체적인 정렬 기준 설정 가능
// 정렬 기준 함수를 사용하지 않으면 각 원소는 문자열 취급으로 인해 의도하지 않게 유니코드 값 순서로 정렬될 수 있음.
// 따라서, 항상 정렬 기준 함수를 명시하는 습관을 들일 필요가 있음.

// [ JavaScript sort function ]
let arr = [
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 },
  { name: '박영희', score: 97 },
]

function compare(a, b) {
  return b.score - a.score // 내림차순 (오름차순은 a-b)
}

arr.sort(compare)

console.log(arr)

/* 실행 결과
[
  { name: '박영희', score: 97 },
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 }
]
*/
