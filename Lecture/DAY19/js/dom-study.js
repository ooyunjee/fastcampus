/*! dom-study.js */

// IIFE 패턴을 사용하여 독립된 코드 공간을 생성
// 모듈 패턴
// 내부는 보안처리됨.
(function(global) {
  'use strict';
  // 문서에서 제어할 객체를 각 변수에 참조합니다.
  // #gnb, #print-area
  var doc = global.document;
  var gnb = doc.querySelector('#gnb');
  var gnb_links = doc.querySelectorAll('a');
  var print_area = doc.querySelector('#print-area');

  var wrapperUpdatePrintMessage = function(i) {
    var _updatePrintMessage = function() {
      // this: 함수를 실행한 주체
      var message = this.getAttribute('data-print-message');
      // console.log('message:', message);
      print_area.innerHTML = message;
      console.log(i);

      // 웹 브라우저의 기본 동작을 차단
      return false;
    };
    return _updatePrintMessage;
  };

  // NodeList <= Like Array Object
  console.log('gnb_links.length:', gnb_links.length);

  // lenght 속성이 있는 객체를 순환할 준비가 되어있다.
  // 반복 구문을 사용할 수 있다.
  for(var i = 0, l = gnb_links.length; i < l; i++) {
    var gnb_link = gnb_links[i];
    // console.log(gnb_link);
    gnb_link.onclick = wrapperUpdatePrintMessage(i);
  }

})(this);

// console.log(global); // 오류 발생
