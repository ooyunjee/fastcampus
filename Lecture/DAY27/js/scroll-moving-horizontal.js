(function(global, $) {
  'use strict';

  var $menu_list = $('.scroll-menu');
  // var $win = $(global);
  var $doc = $('html, body');
  var $scroll_menu_ul = $('scroll-menu ul');

  $menu_list.on('click', function(e){
    var target = e.target;
    // console.log(target.nodeName);
    // if(target.nodeName == 'A') {
    //   e.preventDefault();
    // }
    // e.stopPropagation();
    e.preventDefault();

    var scroll_menu_ul_height = window.parseInt($(this).find('ul').css('height'), 10);
    var target_id = target.getAttribute('href');
    var $target = $(target_id);

    // 목적지로 바로 점핑
    // window.scrollTo(0,$target.offset().top - scroll_menu_ul_height);

    // 목적지로 수직 방향 스크롤 애니메이션
    // eading 참고:
    // http://gsgd.co.uk/sandbox/jquery/easing/
    // http://easings.net/ko
    $doc.animate({
      'scrollLeft': $target.offset().left;
    }, 1200);
  });
})(this, this.jQuery);
