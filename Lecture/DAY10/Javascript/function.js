var button, link, eventHandler;

button = document.querySelector('button');
link = document.querySelector('a');

// 변수에 함수 할당 시에 꼭 ; 붙여야 됨. 함수 정의 시에는 ; 안씀.
eventHandler = function() {
  console.log('call me');
};

button.onclick = eventHandler;
link.onmouseover = eventHandler;

//////////////////
// 함수 작성 방법
//////////////////

// 함수 객체 생성
var fnObj = new Function('console.log("...");');

// 함수 표현식: 변수에 값으로 할당
// 아무 곳에나 정의하면 오류 발생
var fnObjExp = function() {
  console.log('...');
};

// 함수 선언식
// 아무 곳에서나 정의하지 말 것!
// 영역의 상단에 정의하는 것을 권장.
function fnObjDec() {
  console.log('...');
}

// console.log(fnObjDec);

var member1 = 'A';
var member2 = 'B';
var member3 = 'C';

// var members = new Array(member1, member2, member3);
// var members = new Array();
var members = []; // 권장

members[0] = 'A';
members[1] = 'B';
members[2] = 'C';

// 권장
members.push('D');
members.push('E');

console.log('members:', members);

var navigation = {
  'makeId': 13201,
  'use': 'Global Navigation Bar',
  'position': 'top',
  'items': [
    'home',
    'about',
    'works',
    'contact'
  ],
  'created': false,
  'makeSubManu': function() {
    console.log('서브 메뉴를 생성');
  }
};
