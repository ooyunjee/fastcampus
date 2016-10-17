// 자바스크립트의 데이터 유형
// 원시 데이터 유형
var num, str, boo;
num = 1;
str = 'primitive data type';
boo = !0;

// 참조 데이터 유형
var obj, arr, fnc;
fnc = function() {
  console.log('This is function literal.');
};

arr = [];
obj = {};

console.log('num: ', isType(num));
console.log('str: ', isType(str));
console.log('boo: ', isType(boo));

console.log('obj: ', isType(obj));
console.log('arr: ', isType(arr));
console.log('fnc: ', isType(fnc));


var html, head, body;

html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('html type: ', isType(html));
console.log('head type: ', isType(head));
console.log('body type: ', isType(body));

var page, wrapper, brand, slogan;

page = document.querySelector('#page');
wrapper = document.querySelector('.wrapper');
brand = document.querySelector('.brand');
slogan = document.querySelector('.slogan');

console.log('page type: ', isType(page));
console.log('wrapper type: ', isType(wrapper));
console.log('brand type: ', isType(brand));
console.log('slogan type: ', isType(slogan));

// 조건문 사용
// if (조건) {
//   조건이 참일 경우 코드 수행
// }

if(isType(wrapper) == 'null') {
  console.info('문서에 <div class="wrapper"> 요소가 존재하는지 유무를 파악하세요.');
}

// if ~ else 조건문 사용
// if(조건) { 조건이 참일 경우 코드 수행 }
// else { 조건이 거짓일 경우 코드 수행 }

// DOM Level 0 (Legacy)
// if(document.documentElement) {
//   console.log('문서의 뿌리요소인 <html>이 존재합니다.');
// } else {
//   console.log('문서의 뿌리요소인 <html>이 존재하지 않습니다.');
// }

var count = 100;
// if((count = count - 100)){
if(count - 100) {
  console.log('count 변수 값은 0보다 작습니다.');
  console.log(count);
} else {
  console.log('count 변수 값은 0보다 작지 않습니다.');
  console.log(count);
}

console.log('count: ', count);

var demo = page.querySelector('.demo');
console.log(demo);

if(!isExist(demo)) {
  page.setAttribute('title', 'demo 없다.');
  page.style.background = 'red';
} else {
  page.setAttribute('title', 'demo 있다.');
  page.style.background = 'yellow';
}

console.log(page);
