// ES 3
// while(condition) { ... }
var condition = true, count = 0;
while(condition) {
  // 코드 블록 반복 수행
  if(++count > 3) {
    condition = !condition;
  }
  console.log('count:', count);
}

// do { ... } while(condition);
do {
  if(++count > 3) {
    condition = !condition;
  }
} while (condition);
console.log('count:', count);

// for( ; ; ) { ... }
for(var count = 0, condition = true; condition;) {
  // 코드 블록 반복 수행
  if(++count > 3) {
    condition = !condition;
  }
  console.log('count:', count);
}

// 1 ~ 100 합
var sum = 0;
for(var i = 0; i < 100; i++) {
  sum += (i+1);
}
console.log(sum);

// for(var property object) { ... }
var fds = {};
fds.name = 'Front-End Develop school';
// 위 두 표기법은 객체의 속성에 접근하는 방법으로 역할 상의 차이는 업다.
// 다만 각괄호[] 표기법에서는 내부의 속성 이름을 변수로 설정할 수 있다.
// 그런 이유로 for ~ in 문 내부에서는 각괄호 표기법을 사용한다.

// '속성' in 객체{}
console.log(fds['name'], 'name' in fds);
for(var prop in fds) {
  console.log('prop: ', prop);
  console.log('fds[prop]:', fds[prop]);
  console.log('fds[prop] === fds.name: ', fds.name);
}

function fnName1() {} // 함수 이름 지정, 함수 선언
var fnName2 = function() {}; // 익명함수, 변수에 참조. 함수 표현식
// while() {}
// do {} while();

//////////////////////////////////////////
// 전역(Global Scope) vs 지역(Local Scope)
//////////////////////////////////////////

var coffee = '아메리카노'; // window.coffee 속성과 동일
console.log('coffee === window.coffee: ', coffee === window.coffee);
// console.log('fnDeclaration === window.fnDeclaration: ', fnDeclaration === window.fnDeclaration);

// 전역변수, 함수는 웹 브라우저 환경에서 전역 객체인 window {} 객체의 속성이다.

// 전역 변수, 전역 함수에서의 this는 ???
var global_valiable = this;
var globalFunction = function() {
  console.log('this: ', this);
};

globalFunction(); // 전역 함수 실행, 함수를 실행시킨 주체는 누구인가? window !!
// this는 상대적인 것. 함수 실행 주체를 가리킴

// globalFunction 함수는 전역 함수로 window 객체의 속성이지만
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
// 함수를 document 객체의 onclick 속성에 참조함으로서 함수 내부의 this는 document 객체를 가리키도록 변경되었다.
document.onclick = globalFunction;

// 전역: Global Scope로 window 객체의 영역을 말한다.
// 지역: 함수 내부의 공간을 지역이라고 볼 수 있다.

// 전역
var scope_variable = '전역 변수';
console.log('전역 scope_variable:', scope_variable);

// 블록문: 지역 생성 안함.
// if, else, while, for, switch 구문에서는 별도의 지역의 생성 안됨.
// if(true) {
//   var scope_variable = '지역?';
//   console.log('블록문 내부 scope_variable:', scope_variable);
// }
// console.log('블록문 외부 scope_variable:', scope_variable);

// 함수
function createLocalScope() {
  // 지역 변수
  var scope_variable = '함수 내부 지역?';
  console.log('함수 내부 scope_variable:', scope_variable);
}
// 함수 실행
createLocalScope();
console.log('함수 외부 scope_variable:', scope_variable);

// 전역에서 this, self, window는 모두 동일.

var hadoom = '하둠';

function localFn() {
  // 지역
  var hadoom = 'Hadoom';

  function inLocalFn() {
    // 지역 내 지역
    var hadoom = '하둠2';
  }

  inLocalFn();
}

localFn();


// 호이스트(Hoist) 현상
// 호이스팅 "영역(Scope)의 가장 상위에 끌오 올려지다."
// 현상 1. function 선언문의 몸체(body)가 통째로 끌어올려진다.
// 현상 2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어올려진다.

// Hoisting Example
// -----------Scope---------------
var course = 'design';

fn();

function fn() {
  if(course) {
    var course = 'develop';
    console.log(course); //
  }
  console.log(course); // undefined
}
console.log(course); // design

// Hoisting =>
function fn() {
  var course; // undefined
  if(course) { // undefined 이므로 수행 안됨.
    course = 'develop';
    console.log(course);
  }
  console.log(course); // undefined
}
var course = 'design';

fn();

console.log(course); // design
// ----------------------------------------

// 함수 선언, 함수 확장(매개변수 설정)
function showMessage() {
  console.log('This is message.');
}

showMessage();

function showMessage(message) {
  message = message || 'default message';
  console.log(message);
}

showMessage('This is message.');
showMessage('This is message1.');
showMessage('This is message2.');
showMessage();


// 유효성 검사
/**
 * [sumNum description]
 * @param  {[number]} num1 [num1]
 * @param  {[number]} num2 [num2]
 * @return {[number]}      [두 수의 합]
 */
function sumNum(num1, num2) {
  // 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
  // 사용자에게 안내해줘야 한다. (Validation)
  if(typeof num1 !== 'number' || typeof num2 !== 'number' ) {
    // console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
    // 오류 발생 시 코드 중단
    throw new Error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
  }
  // return 키워드는 함수를 종료, 값을 반환
  return num1 + num2;
}

// sumNum('1', '2');
// var sum = sumNum(1,2);
// console.log(sum);

// 반환 값이 없는 함수
// 목적에 맞지 않는 함수
function getWindowWidh() {
  // 창 크기의 가로 폭 길이(너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width): ', _window_width);
}

// 반환 값이 있는 함수
// 목적에 맞는 함수
function getWindowWidh() {
  // 창 크기의 가로 폭 길이(너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width): ', _window_width);

  return _window_width;
}

var window_width = getWindowWidh();
console.log(window_width);

// 함수 내부에 전달되는 인자들의 집합
// arguments: 유사 배열(like Array Object)
// .length 속성을 가짐, .push(), .pop() 배열 메소드는 가지고 있지 않음.
function Sum(n1, n2, n3) {
  if(typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
    throw new Error('전달 인자는 모두 숫자 유형이어야 합니다.');
  }
  return n1 + n2 + n3;
}

Sum(1,2,3);

// for문
// function sumNumFn() {
//   var arg_length = arguments.length;
//   for( var i = 0, sum = 0; i < arg_length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// while문
function sumNumFn() {
  var arg_length = arguments.length;
  var sum = 0;
  var i = 0;
  while(i < arg_length) {
    sum += arguments[i];
    i++;
  }
  return sum;
}

var result = sumNumFn(4, 5, 6, 7, 8);

console.log(result);


// 전역에 정의된 함수
// 전역 함수는 결과적으로 window 객체의 getName 속성이다.
// 값의 유형이 함수 객체이므로 이를 특별하게 메소드라 부른다.
var name = '윤지';
function getName() {
  return this.name;
}

console.log(getName());

// 전역 함수 실행
getName(); // this === window {}
window.getName(); // this === window {}


// 사용자 정의 객체
var cam = {
  'use': 'CCTV',
  'where': 'Fast Campus Room',
  'getName': getName
};
// cam.getName = getName;

cam.name = '패캠 감시캠';
console.log('cam:', cam);


console.log(cam.getName());
console.log(getName);
