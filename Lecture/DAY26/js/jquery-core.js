// <body> 끝에서 호출할 경우 사용하는 패턴
(function($) {
  'use strict';

  var $body = $('body').attr('data-end-body', 'yes');


})(jQuery);

// 외부에 공개될 네임스페이스 객체
var fds = (function() {
  'use strict';

  return {
    // $ 속성에 jQuery 팩토리 함수 참조
    $: jQuery.noConflict(true)
  };
})();
