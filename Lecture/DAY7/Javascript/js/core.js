/**
 *  자바스크립트 원시 데이터 유형 5가지 (값이 복사)
 *  - 숫자
 *  - 문자
 *  - 불리언
 *  - null
 *  - undefined
 */

/**
 * --------------------------------
 * 데이터 형 변환
 * ----------------------------- */

// ---------------------------------
// 숫자 -> 문자

// 숫자 상수일 경우 예
var n = 9;
console.log(typeof n);
console.log(typeof (n+''));

// String() 함수를 사용하는 예
// 첫글자가 대문자인 함수는 관례적으로 생성자(Constructor) 함수를 지칭한다.
// 비록 생성자 함수이나, 여기서는 일반 함수 방식으로 사용하여 숫자 데이터 값을
// 문자 데이터 값으로 변형한다.
var k = 1234;
console.log('k: ', k);
console.log('typeof k: ', typeof k);

// 데이터 값 유형이 변경되었다.
k = String(k);
console.log('k: ', k);
console.log('typeof k: ', typeof k);

// {객체}.toString() 객체가 소유한 함수 유형의 속성을 특별히 "메소드(Method)"라고 부른다.
// 자바스크립트의 모든 객체는 .toString() 메소드를 사용할 수 있다.
var m = 9999;
m = m.toString();
console.log('m: ', m);
console.log('typeof m: ', typeof m);

// 단, 숫자 상수 값의 경우 바로 .toString() 메소드를 사용할 수 없다.
// 아래 코드는 오류를 발생시킨다.
// 8080.toString(); // Uncaught SyntaxError: Invalid or unexpected token

// 하지만 이 문제는 이해할 수 없는 다음과 같은 방법으로 문법 오류 해결이 가능하다.
8080 .toString();  // 사용하지 않는 것이 좋다.
8080..toString();  // 사용하지 않는 것이 좋다.
(8080).toString(); // ※ 빈번하게 사용된다.

// 자바스크립트 언어에서 객체가 아닌 것들은 null, undefined 이다.
// 객체가 아니기 때문에 속성(메소드 같은)이 존재하지 않는다.
// 하여 다음과 같은 코드는 오류를 발생시킨다.
// null.toString();      // Uncaught TypeError: Cannot read property 'toString' of null
// undefined.toString(); // Uncaught TypeError: Cannot read property 'toString' of undefined

// 함수 이름 camelCase 작성법
// function showMeTheMoney() {}
// 함수 호출
// showMeTheMoney();


// ---------------------------------
// 숫자 형 문자(숫자만 포함된) -> 숫자

// 방법 1. - 0, * 1, / 1

var u = '23435';
console.log(u-0);
console.log(u*1);
console.log(u/1);

var uu = '1324123em';
console.log(uu-0); // NaN: Not a number

var h = '34';
h += h;
console.log('h: ', h);

var r= '2.34335';
r = Number(r);
console.log('r: ', r);

var font_size = '32.3px';
var parse_int = window.parseInt(parse_int, 10);
var parse_float = window.parseFloat(parse_float, 10);

console.log('parse int:', parse_int);
console.log('parse float:', parse_float);
