// 1. while
// 조건이 참인 동안(while condition is true) 코드 반복 실행
var num = 0;

while(num < 10){
  console.log('num: ', num); // 0, 1, 2, 3, ... , 9
  num = num + 1; // 0, 1, 2, 3, ... , 9, 10
  num += 1;
  num++; // 1씩 증가
}

console.log('num: ', num); // 10

// 2. do ~ while
// while 문과 유사하나, while 문과 달리 조건이 거짓일지라도 1회는 수행
var num = 14;

do {
  console.log('num: ', num);
  num = num - 2;
} while(num > 10)

// 3. for
// i = iterator 반복자
for(var i=0 ; i < 10 ; i++) {
  console.log('in: ', i);
}
console.log('out > i: ', i);

var k = 20;
for(; k > 10;) {
  console.log('in > k: ', k);
  k--;
}
console.log('out > k: ', k);
// for 문 실행 흐름
// 1. 초기값: var i = 0
// 2. 조건: i < 10 확인
// 3. {}문장 수행: for 문 안의 구문 실행
// 4. 변수값 변화: i++

// 2차원 for 문
for(var i=1; i<10; i++) {
  console.log(i+'단');
  for(var m=1; m < 10; m++) {
    console.log(i*m);
  }
}

var fruits = ['apple', 'banana', 'orange', 'melon'];
var fruits_total = fruits.length;

// 전감소
// while(--fruits_total) {
//   console.log(fruits[fruits_total]);
// }

// 후감소
// while(fruits_total--) {
//   console.log(fruits[fruits_total]);
// }

var filtered_fruits = [];
for(var i=fruits.length, fruit ; (fruit = fruits[--i]); ) {
  console.log(fruit);
}

for(var i = fruits.length, fruit; (fruit = fruits[--i]); ) {
  if(fruit==='apple' || fruit==='banana') {continue;}
  filtered_fruits.push(fruit);
}
console.log('filtered: ', filtered_fruits);

// for문 : array, like array
// 배열이나 유사배열에 사용
var arr = [1,2,7,9,10];

// for ~ in 문: object
// 객체에 사용
var obj = {name: '객체', age: '21년'};
obj.computer = 'Apple Computer';
obj.keyboard = true;
obj.getKey = function() {
  return this.keyboard;
};

for(var prop in obj) {
  // obj['name'], obj['age']
  var value = obj[prop];
  console.log('prop:', prop);
  console.log('value:', value);
}
console.log(obj);

// 브라우저에서 flex를 지원하는지 확인
'flex' in document.body.style
