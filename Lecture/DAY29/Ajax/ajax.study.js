(function(global) {
  'use strict';

  var createXHR;

  if ( global.XMLHttpRequest ) {
    // IE 7+, Modern Web Browsera
    createXHR = function() {
      return new global.XMLHttpRequest();
    };
  }
  else {
    // IE 6
    createXHR = function() {
      return new ActiveXObject('Microsoft.XMLHTTP');
    };
  }

  global.createXHR = createXHR;

})(this);

(function(global, Ajax) {
  'use strict';

  var xhr = new Ajax();

  // 동기(Sync) 방식으로 통신
  xhr.open('GET', './data/data.txt');

  var ajax_call_btn = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  // xhr.send();

  // 비동기 통신 상태를 감지하여 콜백 처리하는 이벤트 구문
  xhr.addEventListener('readystatechange', checkAjaxCommunication);

  function checkAjaxCommunication() {
    if(xhr.status === 200 && xhr.readyState === 4) {
      console.log('데이터 통신 성공');
      console.log('xhr.response', xhr.response);
      console.log('xhr.responseText', xhr.responseText);
      ajax_call_data_result.innerHTML = xhr.responseText;
    }
  }

  ajax_call_btn.addEventListener('click', callAjaxData);

  // 비동기
  function callAjaxData() {
    xhr.send();
  }

  // ajax_call_btn.addEventListener('click', callAjaxData);
  //
  // function callAjaxData() {
  //   xhr.send();
  //   console.log(xhr);
  //   console.log('xhr.status', xhr.status);
  //   if(xhr.status === 200) {
  //     console.log('데이터 통신 성공');
  //     ajax_call_data_result.innerHTML = xhr.responseText;
  //   } else {
  //     console.error('데이터 통신 실패');
  //     ajax_call_data_result.innerHTML = '데이터 통신 실패';
  //   }
  // }

  // global.setTimeout(function() {
  //   xhr.send();
  // }, 2000);

})(this, this.XMLHttpRequest);
