(function(global, $){
  'use strict';

  $.fn.radioClass = function(class_name) {
    this.siblings('.'+class_name).removeClass(class_name);
    this.addClass(class_name);
    return this;
  };

})(this, this.jQuery);

// -----------------------------------------
// TODO:
// -----------------------------------------
// 1. 캐러셀 컴포넌트 마크업/스타일링 (상태 디자인)
// 2. 이전/다음 캐러셀 콘텐츠 보기 기능 구현
// 3. 인디케이터 엑티베이션 (활성화 상태 표시)
// 4. 커스텀 이벤트 처리 (https://goo.gl/uUA4Xd)
// 5. 콘텐츠 뷰 자동 재생/정지 기능 구현
// 6. 플러그인 구현
// -----------------------------------------

(function(global, $) {
  'use strict';

  // uiCarousel 생성자 함수 정의
  function uiCarousel(selector) {
    // 초기 생성자 함수의 역할
    this.carousel_ratio              = 700 / 1200;
    this.active_index                = 0;
    this.carousel_mask_width         = 0;
    this.using_animation             = false;
    this.$carousel                   = null;
    this.$carousel_headline          = null;
    this.$carousel_tablist           = null;
    this.$carousel_tabs              = null;
    this.$carousel_button_group      = null;
    this.$carousel_tabpanel_contents = null;

    // this는 생성된 uiCarousel 객체 인스턴스
    this.init(selector);
    this.events();
  }

  uiCarousel.fn = uiCarousel.prototype;

  // uiCarousel.prototype 객체 정의(확장)
  uiCarousel.fn.init = function(selector) {
    this.$carousel = $(selector);
    console.log(this.$carousel);
    this.$carousel_headline = this.$carousel.children(':header:first');
    this.$carousel_tablist = this.$carousel.children('ul').wrap('<div/>').parent();
    this.$carousel_tabs = this.$carousel.find('a');

    // 동적으로 캐러셀 구조 생성/추가
    this.createPrevNextButtons();
    this.createTabpanelWrapper();
    // 역할별 스타일링 되는 클래스 설정
    this.settingClass();
    this.settingSliding();
    // WAI-ARIA 설정
    this.settingAria();
  };

  uiCarousel.fn.createPrevNextButtons = function() {
    var button_group = [
      '<div>',
      '<button type="button"></button>',
      '<button type="button"></button>',
      '</div>'
    ].join('');
    this.$carousel_button_group = $(button_group).insertAfter(this.$carousel_tablist);
  };

  uiCarousel.fn.createTabpanelWrapper = function() {
    var widget = this;
    widget.$carousel_tabpanel_contents = widget.$carousel.children().last().children();
    $.each(widget.$carousel_tabpanel_contents, function(index) {
      var $tabpanel_content = widget.$carousel_tabpanel_contents.eq(index);
      $tabpanel_content.wrap('<figure/>');
    });
  };

  uiCarousel.fn.settingClass = function() {
    this.$carousel.addClass('ui-carousel');
    this.$carousel_headline.addClass('ui-carousel-headline');
    this.$carousel_tablist.addClass('ui-carousel-tablist');
    this.$carousel_tabs.addClass('ui-carousel-tab');
    this.$carousel_button_group.addClass('ui-carousel-button-group');
    this.$carousel_button_group.children().first().addClass('ui-carousel-prev-button');
    this.$carousel_button_group.children().last().addClass('ui-carousel-next-button');
    this.$carousel_tabpanel_contents.parent().addClass('ui-carousel-tabpanel');
    this.$carousel_tabpanel_contents.closest('div').addClass('ui-carousel-tabpanel-wrapper');
  };

  uiCarousel.fn.settingSliding = function() {
    this.carousel_mask_width = this.$carousel.find('.ui-carousel-tabpanel-wrapper').width();
    console.log(this.carousel_mask_width);
  };

  uiCarousel.fn.settingAria = function() {
    console.log('setting finished WAI-ARIA.');
  };

  uiCarousel.fn.events = function() {
    var widget = this;
    var $tabs = widget.$carousel_tabs;
    var $buttons = widget.$carousel_button_group.children();

    // buttons event
    $buttons.on('click', function() {
      if(this.className === 'ui-carousel-prev-button') {
        widget.prevPanel();
      } else {
        widget.nextPanel();
      }
    });

    // tabs event
    $.each($tabs, function(index) {
      var $tab = $tabs.eq(index);
      $tab.on('click', $.proxy(widget.viewTabpanel, widget, index));
    });

    // resize event
    $(global).on('resize', function() {
      widget.settingSliding();
      widget.$carousel.height( widget.$carousel.width() * widget.carousel_ratio );
    });

  };

  uiCarousel.fn.prevPanel = function() {
    this.viewTabpanel(this.active_index - 1);
  };

  uiCarousel.fn.nextPanel = function() {
    this.viewTabpanel(this.active_index + 1);
  };

  uiCarousel.fn.viewTabpanel = function(index, animate, e) {
    animate = animate || this.using_animation;
    // 사용자가 클릭을 하는 행위가 발생하면 이벤트 객체를 받기 때문에
    // 조건 확인을 통해 브라우저의 기본 동작 차단
    if (e) { e.preventDefault(); }
    var pressedButton = this.active_index < index ? 'next' : 'prev';
    // 활성화된 인덱스를 사용자가 클릭한 인덱스로 변경
    this.active_index = index;
    var carousel_tabs_max = this.$carousel_tabs.length - 1;
    // 처음 또는 마지막 인덱스에 해당할 경우 마지막 또는 처음으로 변경하는 조건 처리
    if ( this.active_index < 0 ) {
      this.active_index = carousel_tabs_max; }
    if ( this.active_index > carousel_tabs_max ) {
      this.active_index = 0; }

    // 애니메이션이 있을 때
    if (animate) {
      console.log(this.carousel_mask_width, pressedButton);
      if(pressedButton === 'next') {

      }

    } else {
      console.log(this.carousel_mask_width, pressedButton);
      // 인디케이터 라디오클래스 활성화
      this.$carousel_tabs.eq(this.active_index).parent().radioClass('active');
      // index에 해당되는 탭패널 활성화
      this.$carousel_tabpanel_contents.eq(this.active_index).parent().radioClass('active');
    }
  };

  global.uiCarousel = uiCarousel;

})(this, this.jQuery);
