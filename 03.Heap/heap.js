// 별도의 라이브러리 설치하여 사용
// 설치: npm install priorityqueuejs

// 예시
var PriorityQueue = require('priorityqueuejs');

var queue = new PriorityQueue(function (a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: 'Valentina' });
queue.enq({ cash: 300, name: 'Jano' });
queue.enq({ cash: 150, name: 'Fran' });
queue.size(); // 3
queue.peek(); // { cash: 300, name: 'Jano' }
queue.deq(); // { cash: 300, name: 'Jano' }
queue.size(); // 2
