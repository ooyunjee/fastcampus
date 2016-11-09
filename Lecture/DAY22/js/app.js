// 의존 모듈 주입(Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $) {
  'use strict';

  // var $ = this.DOM_Helper;
  // $ === DOM_Helper 라이브러리
  // 보통 자바스크립트 라이브러리는 $를 사용한다.

  // 라이브러리 정보 출력
  // console.log('$.name: ', $.name);
  // console.log('$.version: ', $.version);

  // var num = 9;

  // 여기에서만 사용 가능
  // console.log($.isNumber(num));
  // console.log($.isBoolean(num));

  var gnb = $.id('gnb');
  console.log('gnb: ', gnb);

  // tag(tag_name[, context_obj]);
  // []: 안써도 무방하다.
  var gnb_links = $.tag('a');
  console.log('gnb_links:', gnb_links);

  var gnb = $.query('.gnb');
  console.log('gnb query: ', gnb);

  var gnb_links = $.queryAll('a', gnb);
  console.log('gnb query: ', gnb_links);
  //
  // var gnb_link = $.query('a');
  // console.log(gnb_link);

  var gnb_first = $.first(gnb);
  // var gnb_first_first = $.first(gnb_first);
  var gnb_prev_el = $.prev(gnb);
  var gnb_next_p = $.next(gnb);
  var gnb_next_p_parent = $.parent(gnb_links[2], 2);

  console.log('gnb_first:', gnb_first);
  // console.log('gnb_first_first:', gnb_first_first);
  console.log('gnb_prev_el:', gnb_prev_el);
  console.log('gnb_next_p:', gnb_next_p);
  console.log('gnb_next_p_parent:', gnb_next_p_parent);



})(this, this.DOM_Helper);
