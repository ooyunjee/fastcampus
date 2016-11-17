(function($) {
  'use strict';

  var $box = $('.box');

  var effect_sound = new Audio();
  effect_sound.src = 'media/tong.mp3';

  var fireEffectSound = function() {
    effect_sound.pause();
    effect_sound.currentTime = 0;
    effect_sound.play();
  };

  var change_width = 100;

  $box.on('click', function() {
    var $this = $(this);

    var current_top = $this.offset().top;
    var current_left = $this.offset().left;

    fireEffectSound();

    $this.width(change_width).height(change_width).addClass('clicked');
    change_width += 10;

    $this.offset({
      'top': current_top + 100,
      'left': current_left + 100
    });

  });
})(this.jQuery);
