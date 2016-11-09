(function(global){
  'use strict';

  var on, off;

  on = (function(){
    var _on;
    // W3C 표준 신형
    if ( global.addEventListener ) {
      _on = function(el, type, fn, capture) {
        el.addEventListener(type, fn, ( capture || false ) );
      };
    }
    // MS 비표준 신형
    else if ( global.attachEvent ) {
      _on = function(el, type, fn) {
        el.attachEvent('on'+type, fn);
      };
    }
    // 구형 이벤트 모델
    else {
      _on = function(el, type, fn) {
        el['on'+type] = fn;
      };
    }
    return _on;
  })();

  off = (function(){
    var _off;
    // W3C 표준 신형
    if ( global.removeEventListener ) {
      _off = function(el, type, fn, capture) {
        el.removeEventListener(type, fn, ( capture || false ) );
      };
    }
    // MS 비표준 신형
    else if ( global.dettachEvent ) {
      _off = function(el, type, fn) {
        el.dettachEvent('on'+type, fn);
      };
    }
    // 구형 이벤트 모델
    else {
      _off = function(el, type) {
        el['on'+type] = null;
      };
    }
    return _off;
  })();

  global.on = on;
  global.off = off;

  // global.y9 = {};
  // global.y9.events = {
  //   'on': on,
  //   'off': off
  // };

})(this);

(function(global) {
  'use strict';

  /**
   * 진보 이벤트 모델: W3C 표준 vs MS 비표준
   */

  var boxes = document.querySelectorAll('.box');

  // W3C 표준 진보 이벤트 추가 방법
  // NODE.addEventListener(event_type, event_handler, capture)
  // for(var i = 0, l = boxes.length; i < l; i++) {
  //   boxes[i].addEventListener('click', function(e) {
  //     console.log('this:', this);
  //     console.log('e.target:', e.target); // 누른 것
  //     console.log('e.currentTarget:', e.currentTarget); // 전파된 것
  //     console.log('%c---------------------------------------', 'color: #c46868');
  //   }, false); // true: capture(이벤트가 부모에서 자식으로 올라옴, 부모->자식), false: bubble(자식에서 부모로 내려감, 자식->부모)(default)
  // }

  var target = boxes.item(0);

  // 구형 이벤트 모델 vs 신형 이벤트 모델
  // 구형
  var fnA = function() { console.log('A'); console.log('this:',this); }
  var fnB = function() { console.log('B'); console.log('this:',this); }

  var event_type = 'mouseover';

  // target.onclick = fnA;
  // target['on'+event_type] = fnA;
  // target['on'+event_type] = fnB;

  target['on'+event_type] = function() {
    // 엄격한 모드에서는 this를 명시하지 않으면 this는 target이 아니다.
    // this !== target
    // fnA();

    // call : this가 함수를 빌려쓰는 것.
    fnA.call(this);
    fnB.call(this);
  };

  // 신형 (IE 6-8 지원 안함)
  // 구형과 달리, 여러 개의 이벤트를 요소에 연결 가능
  // 함수 내부의 this도 이벤트가 연결된 문서 객체를 참조
  // 다수의 이벤트를 걸 수 있다.
  // target.addEventListener('click', fnA);
  // target.addEventListener('click', fnB);

  // ------------------------------------------------------------

  // W3C Standard Event Model VS. MS non Standard Event Model(IE 6-8)
  // .addEventListener(type, handler, capture) VS. .attachEvent('on'+type, handler) (bubbling만)
  // target.attachEvent('on'+event_type, fnA);
  // target.attachEvent('on'+event_type, fnB);

  // 함수형 프로그래밍
  // on(el_node, type, handler, capture);
  // off(el_node, type, handler);
  // on(target, 'click', fnA, true);
  // on(target, 'mousemove', fnB);

  // 객체형 프로그래밍
  // $('selector').on(type, handler);
  // $('selector').off(type, handler);

})(this);
