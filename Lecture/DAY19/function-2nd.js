/*! function-2nd.js */
(function(global) {

  // 전역
  // 느슨한 모드

  function localScope(callback) {
    // 엄격 모드 실행
    'use strict';
    // 특정 코드를 수행 ...
    for(var i = 0; i < 100; i += 4) {
      console.log('i: ', i);
    }
    // 전달받은 인자(함수)를 실행
    // 올바른 데이터 유형을 감지한 후, 올바르다면 코드 실행
    // 전달 받은 인자의 유형이 함수일 경우에만 callback() 실행
    // console.log(typeof callback);

    var is_callback = typeof callback === 'function';

    // 1. if 문을 사용
    if(is_callback) {
      callback();
    } else {
      throw new Error('전달인자가 함수가 아닙니다.');
    }

    // 2. 3항 연산자 사용
    is_callback ? callback() : null;

    // // 3. 논리 연산자 사용
    // is_callback && callback();
    //
    // // 4. switch
    // switch(is_callback) {
    //   case true: callback();
    //   break;
    //   case false: throw new Error('전달인자가 함수가 아닙니다.');
    // }
  }

  // 경우 1. 함수 인자가 있을 경우
  // localScope(function() {
  //   console.log('localScope 함수의 코드가 모두 실행된 다음 전달된 함수 실행');
  // });

  // 경우 2. 함수 인자가 없는 경우
  // localScope();

  // ----------------------------------------------------------------------

  // 함수가 일급객체인 이유 2
  // 함수는 함수를 인자로 받을 수 있을 뿐만 아니라, 함수를 반환(return)할 수도 있다.

  function returnFunction(data) {
    var a = data[0];
    var b = data[1];
    var c = function(a, b) { return a + b; };

    return c;
  }

  var cfn = returnFunction([10, 20]);
  // console.log(cfn(1,2));

  // 함수를 리턴가능
  // 함수 내부에 선언된 변수는 외부에서 접근 불가
  // 내부의 것들은 사용 가능
  // 별도의 독립된 공간에 기억된 값에 접근하기 위함
  // 그것을 밖으로 빼낼 수 있음

  // ------closure 영역-------------------------------
  function countDown(count) {
    // ------내부 함수(closure 함수)--------------
    // closure 영역(부모 함수의 스코프)에 접근 가능
    // 함수가 종료되면서 탄생시킨 클로저에서는 부모영역을 기억한다.
    function _countDown() {
      count = count - 1;
      return count;
    }
    // ----------------------------------------
    // 객체 리턴 가능
    return _countDown;
  }
  // ------------------------------------------------

  var f = countDown(10);
  console.log(countDown());
  console.log(f());
  console.log(f());
  console.log(f());
  console.log(f());

  // 객체를 전달받는 함수, 객체를 반환하는 함수
  // 문서 객체에 스타일을 설정하는 함수
  function css() {

  }

  function getStyle() {
    return ;
  }

  function setStyle() {

  }

  // IIFE 패턴
  // 즉시 실행 함수
  // function() {} // 문법 오류
  // function() {}() // () 실행 연산자 붙은 이 코드도 오류

  // 정상적으로 함수 실행됨. 즉시!!
  // +function() { console.log('IIFE Pattern'); }();
  // !function() { console.log('IIFE Pattern'); }();
  // ~function() { console.log('IIFE Pattern'); }();

  // 정체모를 위 코드 보다는 아래와 같은 유형으로 작성하길 권함!!
  ( function() { console.log('IIFE Pattern'); }() ); // 권장
  ( function() { console.log('IIFE Pattern'); } )();


  // ECMAScript 2015 (ES6) 모듈이 정식으로 언어 차원에서 지원

  var count = -1;
  console.log('count: ', count);
  global.count = count; // 전역으로 내보냄.
})(this); // this === window

// 모듈 패턴: 전역을 더럽히지 않고 코드를 보호한다.

// A team
(function(global) {
  'use strict';
  var fds = 'FDS A Team';
})(this);

// B team
(function(global) {
  'use strict';
  var fds = 'FDS B Team';
})(this);
// 전달인자: this => 매개변수: global
