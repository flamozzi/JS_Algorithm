// 일반적으로 스택을 구현할 때, JavaScript의 배열(array) 자료형을 사용한다.
let stack = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

// 상단 원소부터 확인하기 위해 reverse 사용
let reversed = stack.slice().reverse();
console.log(reversed);
console.log(stack);

// 실행결과
// [1, 3, 2, 5]
// [5, 2, 3, 1]
