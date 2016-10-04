var k = 1;
var m = -191;
var j = 0;
var b = 2.234234;
var y = k + m - j * b / m;

console.log('k: ', k);
console.log('m: ', m);
console.log('j: ', j);
console.log('b: ', b);
console.log('y: ', y);

console.log('typeof k: ', typeof k);
console.log('typeof m: ', typeof m);
console.log('typeof j: ', typeof j);
console.log('typeof b: ', typeof (b+''));
console.log('typeof y: ', typeof y);

var html_is        = 'HTML은 "문서 구조를 작성하는 언어"이다.';
var css_is         = "CSS는 HTML '문서를 스타일링 하는 언어'이다.";
var javascript_is  = 'JavaScript는 \'HTML 문서를 동적으로 변경/제어하는 인터렉티브 언어\'이다.';

var is_web_programming_languages;
is_web_programming_languages = html_is + '\n' + css_is + '\n' + javascript_is;
console.log('is_web_programming_languages: ', '\n' + is_web_programming_languages);

var fds_true;
var fds_false;

console.log('fds_true: ', fds_true);
console.log('fds_false: ', fds_false);

console.log('typeof fds_true: ', typeof fds_true);
console.log('typeof fds_false: ', typeof fds_false);

var n = 0;
var n_1 = 1;
var n_2 = -10;
var n_3 = 23;

console.log('n:', n);
console.log('n_1:', n_1);
console.log('n_2:', n_2);
console.log('n_3:', n_3);

console.log('%c-------------------yunjee-----------------------', 'color: #1ead82');

console.log('n:', Boolean(n));
console.log('n_1:', Boolean(n_1));
console.log('n_2:', Boolean(n_2));
console.log('n_3:', Boolean(n_3));

// 암묵적 변수 초기화
var data1; // undefined

// 명시적 변수 초기화
var data2 = null;
var data3 = undefined;

console.log('data1: ', data1);
console.log('data2: ', data2);

console.log('data1: ', Boolean(data1));
console.log('data2: ', Boolean(data2));

console.log('%c-------------------yunjee-----------------------', 'color: #1ead82');

document.onclick; // null

// one event
document.onclick = function() {
  console.log('문서객체 클릭');
  document.onclick = null;
}
