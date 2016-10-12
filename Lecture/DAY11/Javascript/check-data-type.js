// Single var pattern
var num = 102,
    str = 'typeof는 함수가 아니다.',
    bool = !false,
    fnc = function() {};
    arr = [num, bool, fnc],
    obj = { 'number_type': num, 'boolean': bool };

// 원시 데이터 유형
console.log('num 변수에 복사된 데이터 유형:', typeof num);
console.log('str 변수에 복사된 데이터 유형:', typeof str);
console.log('bool 변수에 복사된 데이터 유형:', typeof bool);

// 참조 데이터 유형
console.log('fnc 변수에 복사된 데이터 유형:', typeof fnc);
console.log('arr 변수에 복사된 데이터 유형:', typeof arr);
console.log('obj 변수에 복사된 데이터 유형:', typeof obj);

// typeof는 함수가 아니라, 뒤에 나오는 데이터 유형을 감지하여
// 감지된 데이터 유형 값을 반환한다.
// 만약 감지하고자 하는 데이터유형이 2개이 상이라면 괄호를
// 사용하여 데이터를 묶어서 체크해야 한다.

// object, array, null => typeof 체킹 시 object로 출력
console.log(typeof(num + str));

// 인스턴스 instanceof 원형(모체)
// return Boolean { true, false }

console.log('obj instanceof Object: ', obj instanceof Object);
console.log('arr instanceof Array: ', arr instanceof Array);
console.log('fnc instanceof Function: ', fnc instanceof Function);

// 원시 데이터 유형의 경우, instanceof를 통해 기대하는 바를 도출할 수 있다.
// 이유는 원시 데이터 유형은 실상 객체가 아닌, 값이기 떄문이다.
// 다만 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을
// 마치 객체인 것 처럼 사용할 수 있게 만들어 준다.
console.log('num instanceof Number: ', num instanceof Number);
console.log('str instanceof String: ', str instanceof String);
console.log('bool instanceof Boolean: ', bool instanceof Boolean);

// 생성자
console.log('arr.constructor: ', arr.constructor );
console.log('arr.constructor === Array: ', arr.constructor === Array );

console.log('obj.constructor: ', obj.constructor );
console.log('obj.constructor === Object: ', obj.constructor === Array );

console.log('fnc.constructor: ', fnc.constructor );
console.log('fnc.constructor === Function: ', fnc.constructor === Array );

console.log('num.constructor: ', num.constructor );
console.log('num.constructor === Number: ', num.constructor === Number );

console.log('str.constructor: ', str.constructor );
console.log('str.constructor === String: ', str.constructor === String );

console.log('bool.constructor: ', bool.constructor );
console.log('bool.constructor === Boolean: ', bool.constructor === Boolean );

// isType()
function isType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

console.log(isType('akjsdfakdsjfalsd'));
// console.log(isType());
