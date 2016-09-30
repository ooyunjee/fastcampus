//------------------------------------
// 자바스크립트 코어
//------------------------------------
// 변수(variable)에 갑이 할당되는 것은
// 값의 유형(Data Type)에 따라
// 복사하거나 참조(Reference)하게 된다.

// 변수 선언 방법 ---------------------------------------
// 방법 1. 변수 선언
// 방법 2. 선언된 변수에 값 할당
// 방법 3. 선언과 동시에 값을 할당
// 방법 4. var 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴

// 원시 데이터 유형
// - String
// - Number
// - Boolean
// - null
// - undefiend
var fds_model = '데이터 리스트'; // string
var current_state = 200; // number
var is_finished = false; // boolean
var container_el = null; // null
var my_name; // undefiend

// ---------------------------------------------------
// 데이터 값 `복사`와 `참조`
// ---------------------------------------------------
// 변수(Variable)에 값이 할당된다라는 것은
// 값의 유형(Data Type)에 따라 복사하거나,
// 참조(Reference)하게 된다.

// 현재 코드 라인에서는 결과 값이 동일하다. (동일한 데이터가 각 변수에 복제되었다)
var fds_view = fds_model;

console.log('fds_model: ', fds_model);
console.log('fds_view: ', fds_view);

// fds_model 변수 값이 fds_view 변수에 복제되었기 때문에 둘의 결과 값은 동일하다.
console.log('fds_model===fds_view: ', fds_model===fds_view);

// fds_model 변수의 값이 교체되었다.
var fds_model = 'Front-End Dev.';

console.log('fds_model:', fds_model);
console.log('fds_view:', fds_view);

// fds_model 변수 값이 바뀌었기 때문에 둘의 결과 값은 더 이상 동일하지 않다.
console.log('fds_model===fds_view: ', fds_model===fds_view);

//------------------------------------

var my_parent = document.getElementById('parent');
var child_1 = document.getElementById('child-one');
var child_2 = document.getElementById('child-two');

console.log(my_parent);
console.log(child_1);
console.log(child_2);

// 문서 객체 제어
my_parent.style.border = '1px solid #cd467a';
child_1.style.backgroundColor = '#e8ccde';
child_2.style.backgroundColor = '#dab1cb';
