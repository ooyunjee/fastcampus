(function(global, $) {
  'use strict';

  // Native
  var getStyle = (function() {
    var _getStyle;

    if(window.getComputedStyle) {
      _getStyle = function(el, property, pseudo) {
        pseudo = pseudo || null;
        return window.getComputedStyle(el, pseudo)[property]; // W3C
      };
    } else {
      _getStyle = function(el, property) {
        return el.currentStyle.fontSize[property]; // MS
      };
    }

    return _getStyle;
  });
  // function getStyle(el, property) {
  //   if(window.getComputedStyle) {
  //     return window.getComputedStyle(el, null)[property]; // W3C
  //   } else {
  //     return el.currentStyle.fontSize[property]; // MS
  //   }
  // }


  // SET
  // var brand = document.querySelector('.brand');
  // brand.style.color = '#602c4f';

  // GET
  // var n_bfs = getStyle(brand, 'fontSize');
  // console.log(n_bfs);


  // jQuery
  var $brand = $('.brand');
  // SET
  // $brand.css('color', '#602c4f');

  // GET
  // var brand_font_size = $brand.css('font-size');
  console.log($brand.css('font-size'));

  // $brand.css('font-size', '2rem');
  // $brand.css('letter-spacing', '0.03em');
  // $brand.css('font-weight', '700');
  // $brand.css('font-family', '"Spoqa Han Sans"');
  // $brand.css('color', '#27c6a9');
  // $brand.css('padding', '1em 1.2em');
  // $brand.css('border', '3px solid currentColor');
  // $brand.css('margin', '1em');
  // $brand.css('border-radius', '0.3125rem');

  $brand.css({
    'font-size': '2rem',
    'letter-spacing': '0,.03em',
    'font-weight': '700',
    'font-family': '"Spoqa Han Sans"',
    'color': '#27c6a9',
    'padding': '1em 1.2em',
    'border': '3px solid currentColor',
    'margin': '1em',
    'border-radius': '0.3125rem',
    'transition': 'all 0.3s',
    'cursor': 'pointer'
  });

  // jQuery 이벤트 설정
  $brand.on('click', function() {
    // this는 jQuery instance가 아니다.
    // h1 요소일 뿐이기 때문에
    // jQuery의 능력을 쓸 수 없다.
    var $brand = $(this).css({
      'width': function(idx, current_width) {
        var changed_width = global.parseFloat(current_width, 10) + 100 + 'px';
        return changed_width;
      },
      'height': function(idx, current_height) {
        var changed_height = global.parseFloat(current_height, 10) + 100 + 'px';
        return changed_height;
      }
    });

    var props = $brand.css(['font-size', 'width', 'letter-spacing']);
    var html_string = ['<h3>brand properties</h3>'];

    for (var prop in props) {
      html_string.push(`<p><code>${prop}: ${props[prop]}</code></p>`);
    }

    $('.you').html(html_string);
  });

  ///////////////////////////////////////////////////////
  // jQuery를 사용하여 1초 마다 글자 크기가 3단계까지 변하는 메소드 //
  ///////////////////////////////////////////////////////

  // 초기 변수
  // var count        = 0;
  // var delay        = 100;
  // var max_count    = 15;
  // var change_value = 5;
  //
  // // 초기 변수 값을 조건에 맞게 변화
  // // 총 max_count에 맞도록 설정
  // while( count++ < max_count ) {
  //   window.setTimeout(function() {
  //     var current_font_size = parseInt($brand.css('font-size'),10);
  //     current_font_size += change_value;
  //     $brand.css('font-size', current_font_size + 'px');
  //   }, delay * count);
  // }

})(this, this.jQuery);
