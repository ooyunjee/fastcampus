(function(global) {
  'use strict';

  // BOM
  // 브라우저 객체 모델
  // 브라우저를 구성하는 객체들
  // window {} : Global Object
  // window 객체에 종속된 하위 객체들
  // window.navigator
  // window.screen
  // window.location
  // window.history
  // winodw.document

  // window.screen {}
  // 사용자의 스크린에 관한 정보를 제공하는 객체
  // var console_style = 'color: #d27c79'

  // console.log('사용자의 스크린 해상도는 %c' + screen_resolution + ' 입니다.', console_style);
  //
  // // 실제 사용자의 가용(Avail) 스크린 해상도 구하기
  //
  // console.log('사용자의 스크린 해상도는 %c' + screen_avail_resolution + ' 입니다.', console_style);
  //
  //
  // if(screen_width !== screen_avail_width) {
  //   screen_width_gap = screen_width - screen_avail_width;
  //   console.log('가로 폭 차이: ', screen_width_gap);
  // }
  //
  // if(screen_height !== screen_avail_height) {
  //   screen_height_gap = screen_height - screen_avail_height;
  //   console.log('세로 폭 차이: ', screen_height_gap);
  // }
  //
  // // 실제 가용 가능한 기준이 되는 위치는
  // console.log('screen.availTop: ', screen.availTop);
  // console.log('screen.availLeft: ', screen.availLeft);

  function screenInfo() {
    var screen = global.screen;
    var _screen_info = {};

    _screen_info.width = screen.width;
    _screen_info.height = screen.height;
    _screen_info.avail_width = screen.availWidth;
    _screen_info.avail_height = screen.availHeight;
    _screen_info.avail_top = screen.availTop;
    _screen_info.avail_left = screen.availLeft;

    _screen_info.resolution = _screen_info.width + 'x' + _screen_info.height;
    _screen_info.avail_resolution = _screen_info.avail_width + 'x' + _screen_info.avail_height;

    _screen_info.gap = {
      'width': _screen_info.width - _screen_info.avail_width,
      'height': _screen_info.height - _screen_info.avail_height
    }

    return _screen_info;
  }

  console.log(screenInfo);

  // global.screenInfo = screenInfo();
  console.log(screenInfo());
  // global.screenInfo = screenInfo;

  var navigator = global.navigator;
  var platform = navigator.platform;
  var is_mac = platform.toLowerCase().indexOf('mac') > -1;
  var is_win = platform.toLowerCase().indexOf('win') > -1;
  var html = window.document.documentElement;

  html.className = is_mac ? 'mac' : 'win';



  // ------------------------------------------------

  

})(this);

(function(global) {
  'use strict';

  var document = global.document;
  var location = global.location;
  var setTimeout = global.setTimeout;
  var bg_color = '#c9cacf';
  var duration = 1000;
  // 페이지 로드 시에 주소창의 hash 값을 가져와서
  // 해당 요소를 찾아서 스타일링 한다.

  var stylingHashElement = function() {
    console.log('stylingHashElement');
    var hash = location.hash;
    var target_element = null;

    // 임의 정의된 hash 값이 있다면
    if(hash) {
      target_element = document.querySelector(hash);
    }

    if(target_element) {
      // 스타일 추가
      target_element.style.background = bg_color;
      target_element.style.transition = 'background 1s';

      // 특정 시간이 지나면 스타일 제거
      setTimeout(function() {
        target_element.style.background = '';
      }, duration);

    }

    // console.log('hash', hash);
  };

  function assignAction() {
    var go_to_point = document.querySelector('#go-to-point');
    var go_to_links = go_to_point.querySelectorAll('a');

    for(var i = 0, l = go_to_links.length; i < l; i++) {
      go_to_links[i].onclick = function() {
        setTimeout(stylingHashElement, 100);
      };
    }
  }

  global.onload = assignAction;

})(this);

// location.hash: 클릭했을 때 hash를 통해 목표 요소를 스타일링하는 응용 예제
(function() {
  'use strict';


});

// navigator.userAgent: 사용자 에이전트의 식별자를 통해 기기 판별 응용
(function(global) {
  'use strict';

  var navigator = global.navigator;
  var userAgent = navigator.userAgent.toLowerCase(); // 브라우저 식별자

  console.log('userAgent: ', userAgent);

  function isDevice(device) {
    if(typeof device !== 'string') {
      throw new Error('전달인자는 문자열이어야 합니다.');
    }

    return userAgent.indexOf(device) > -1;
  }

  function checkDevices(devices) {
    // 배열화
    if(typeof devices === 'string') {
      devices = devices.split(' ');
    }

    if(!(devices instanceof Array)) {
      throw new Error('전달인자는 배열이나 문자열이어야 합니다.');
    }

    // 기기의 식별자를 가진 배열 순환
    for(var i = 0, l = devices.length; i < l; i++) {
      var device = devices[i];
      if(isDevice(device)) {
        console.log(device);
      }
    }
  }

  global.checkDevices = checkDevices;
  checkDevices('iphone android ipad');

})(this);
