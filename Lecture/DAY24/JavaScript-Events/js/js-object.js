/**
 * ----------------------------------------------------------------
 * 자바스크립트에서 객체가 아닌 것들
 * ---------------------------------------------------------------- */

// 배열이란? '값'의 집합
// 객체란? '속성'의 집합 { '속성(key, property)': '값(value)' }

///////////////////////////////
// 자바스크립트에서 객체가 아닌 것들 //
///////////////////////////////

// 원시데이터 유형은 객체가 아니다.
// 속성을 가지지 못한다.

// 원시데이터 유형의 종류
// null
// undefined

// ※ 자바스크립트에서는 마치 객체인 것 마냥 속성을 가져다 쓸 수 있다.
// 숫자 9 값(Literal)
// 문자 'javascript' 값
// 불리언 false 값

/////////////////////
// 객체가 생성되는 과정 //
/////////////////////

// 객체를 생성해서 사용한다.
// 객체를 생성하는 생성자(Constructor)가 객체를 생성(생성된 객체: Instance)한다.

// 숫자 객체를 생성하는 생성자(함수)로부터 숫자 객체를 생성하는 과정
// 생성자 함수와 일반 함수를 구분하기 위한 자바스크립트 이름 관례는
// 생성자 함수 이름의 첫글자를 대문자로 작성한다.

// 생성자 함수
// Number()
// String()
// Boolean()

/////////////////////////
// 본래의 목적과 다른 사용법 //
/////////////////////////

// 위 생성자 함수는 생성자로 사용되기도 하지만, 자바스크립트에서는
// 데이터 유형을 변경하는데 사용되기도 한다.
// String(109203) -> '109203'
// Number(null) -> 1

/////////////////////////////////
// 생성자 함수를 사용한 객체 생성 과정 //
// new 생성자 함수() -> 객체 생성 ///
///////////////////////////////

var maked_number_object = new Number(838372);

console.dir(maked_number_object);


/////////////////////////////////
// 객체는 속성을 포함하는 컨테이너이다. //
/////////////////////////////////

// 속성들의 집합이 객체이다.
// 속성은 변수, 함수 유형을 모두 말한다.
// 단, 함수 유형은 특별히 메소드(Method)라고도 부른다.
// 메소드 이름 작성 관례는 camelCase 표기법을 따른다.
// 메소드(방법) -> 동사 형태 e.g) getName(), setName(), lookHim(), showMeTheMoney()

// 함수객체() : 실행됨
// 함수객체   : 실행안됨

//////////////
// HTML/CSS //
//////////////

// 《어떤 표기법이 맞냐가 아니라, 우리 팀이 어떤 이름 규칙을 쓰느냐이다》

// 하이픈(-)
// 언더스코어(_)
// 카멜케이스()


///////////////////////////
// 네이티브 객체 리터럴 표기법 //
///////////////////////////

var num = 9,
    str = 'nine',
    boo = false,
    fnc = function(){},
    arr = [],
    obj = {};


// 사용자 정의 생성자 함수
function Atom(name, n) {
  // 엄격한 모드를 사용하면
  // 함수를 실행한 this가 더이상 window가 아니게 된다.
  // 명시적으로 실행하지 않고 암묵적으로 실행했을 경우(window.Atom()이 아닌 경우)
  'use strict';

  // new를 강제화하는 패턴
  // if(this.constructor !== Atom) {
  //   return new Atom(name, n);
  // }

  this.name = name;
  this.power = 100 * n;
}

// 사용자 정의 객체를 생성(new 생성자 함수)
// var atom_one = Atom('제롬', 10);
var zero = new Atom('제로', 100);

// 객체 생성 방법(리터럴)
var obj = { 'name': 'atom', 'power': 10000 };

// console.log(atom_one);
console.log(zero);

function Car(name ,maker) {
  'use strict';
  this.name = name;
  this.maker = maker;
}

var car2 = new Car('차', 'bmw');

/**
 * 자바스크립트 네이티브(내장, 빌트인) 객체
 * Number
 * String !!
 * Boolean
 * Array !!
 * Function !!
 * Object
 */

console.log('one two three'.substring(4, 7));
console.log('one two three'.substring(8, 13));
console.log('one two three'.split(' '));
console.log('one two three'.split(' ', 2));
console.log('one two three'.substr(8, 5));
console.log('one two three'.indexOf('three'));

var a = [];
a.push(1);
a.push(2);
a.push(3);
a.unshift(2); // 앞에서부터 넣어줌

console.log(a);
function cloneArray(arr) {
  if(!(arr instanceof Array)) {
    throw new Error('전달인자는 배열이어야 합니다.');
  }

  // 참조
  // 변별성이 없음. 하나가 변하면 다른것도 같이 변함.
  // var clone_arr = arr;

  // 복제
  var clone_arr = [];
  // for(var i = 0; i < arr.length; i++) {
    // clone_arr[i] = arr[i];
  // }
  for(var i = 0, l = arr.length; i < l; i++) {
    clone_arr.push(arr[i]);
  }
  return clone_arr;

  // slice() 배열로 반환
  // 0만 쓰면 전부 다 반환
  // return arr.slice(0);
}

var clone = cloneArray(a);
console.log(clone);
clone.pop();
console.log(a);
console.log(clone);

function makeArrary(data) {
  return Array.prototype.slice.call(data, 0);
  // return [].slice.call(data, 0);
}

var gnb = document.querySelector('.gnb');
var gnb_links = gnb.querySelectorAll('a');

var gnb_links_converted = makeArrary(gnb_links);
console.log(gnb_links_converted);
gnb_links_converted.reverse();
console.log(gnb_links_converted);

// ----------------------------------------------------

var linkCounter = function() {
  console.log(this);
};

gnb_links.forEach(function(link, index) {
  link.addEventListener('click', linkCounter);
});

// 배열 메소드 빌려쓰기 패턴
var forEach = Array.prototype.forEach;
forEach.call(gnb_links, function(el) {
  console.log(el);
});

// 노드리스트를 배열화하는 패턴
gnb_links_converted = makeArrary(gnb_links);
gnb_links_converted.forEach(function(el){
  console.log(el);
});

// ----------------------------------------------------
// apply(), call(), bind()
// 모든 함수 객체들이 갖고 있다.

function Tab() {} // 생성자 함수
Tab.prototype; // 프로토타입 객체
var my_tab = new Tab(); // 객체 인스턴스 생성
my_tab.activeTab; // undefined
Tab.prototype.activeTab = function() {}; // 프로토타입 객체 능력 추가
my_tab.activeTab; // function() {} // 인스턴스 객체는 그 능력을 사용할 수 있다.

// 생성자 함수
function Tab(selector) {
  this.el = document.querySelector(selector);
}

// 프로토타입
// Tab.prototype; // {}
// 프로토타입 객체의 능력을 확장
Tab.prototype.init = function() {};
Tab.prototype.activeTab = function(index) {};
Tab.prototype.deactivTab = function() {};
Tab.prototype.playTab = function(duration) {};
Tab.prototype.stopTab = function() {};

// 인스턴스 객체 생성
var header_tab, main_tab, footer_tab;

header_tab = new Tab('.header .tab');
main_tab = new Tab('.main .tab');
footer_tab = new Tab('.footer .tab');

console.log(header_tab);
console.log(main_tab);
console.log(footer_tab);
