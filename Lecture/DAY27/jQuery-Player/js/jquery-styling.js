/*! jquery-styling.js © yunjee, 2016 */

(function(global, $){
  'use strict';

  // var $demo_container = $('.demo-container');
  // console.log($demo_container);
  //
  // $demo_container.css('background', 'radial-gradient(#333, #000)');
  // $demo_container.css({
  //   'flex-direction': 'column',
  //   'flex-wrap': 'wrap',
  //   'align-content': 'flex-start'
  // });
  //
  // var container_props = $demo_container.css(['flex-flow', 'justify-content']);
  // $('.album img').css({
  //   'display': function(idx, prop) {
  //     console.log(idx + ' '+ prop);
  //     if(idx === 2 && !container_props.display) {
  //       container_props.display = prop;
  //     } else {
  //       prop = 'inline-block';
  //       return prop;
  //     }
  //   }
  // });

  // var musics = [];

  var $album = $('.album');
  var $play_btn = $('.play-btn');
  var $prev_btn = $('.prev-btn');
  var $next_btn = $('.next-btn');
  var $play_btn_img = $('.play-btn img');
  var ironman_voice = document.createElement('audio');


  var is_clicked = false;
  ironman_voice.setAttribute('src', 'media/Beenzino-01-Dali, Van, Picasso.mp3');

  $album.on('mouseenter', moveDisk).on('mouseenter', showBtn);
  // $play_btn.on('mouseout', hideBtn);
  $play_btn.on('click', toggleDisk);
  // $play_btn.on('mouseenter', btnShow);
  // $play_btn.on('mouseout', btnHide);

  function moveDisk() {
    $album.find('.album-disk').addClass('move');
  }

  function showBtn() {
    $play_btn.css('display', 'block');
    $prev_btn.css('display', 'block');
    $next_btn.css('display', 'block');
  }
  function hideBtn() {
    $play_btn.css('display', 'none');
    $prev_btn.css('display', 'none');
    $next_btn.css('display', 'none');
  }

  function toggleDisk() {
    if(is_clicked === false) {
      $album.find('.album-disk').removeClass('move').removeClass('stop').addClass('play');
      $play_btn_img.attr('src', 'images/pause-button.svg')
      ironman_voice.play();
      is_clicked = !is_clicked;
    } else if(is_clicked === true) {
      $album.find('.album-disk').removeClass('play').addClass('stop');
      $play_btn_img.attr('src', 'images/play-button.svg');
      ironman_voice.pause();
      is_clicked = !is_clicked;
    }
  }

  // $('.demo-container').addClass(function(index, current_class) {
  //   // Native
  //   if(this.classList.contains('album-vinyl')){
  //     return 'source-vinyl-stream';
  //   }
  //
  //   // jQuery
  //   if($(this).hasClass('album-vinyl')){
  //     return 'source-vinyl-stream';
  //   }
  // });

  // Native
  // var vinyl = this.querySelector('.album-vinyl');
  //
  // vinyl.classList.toggle('toggle');
  //
  // if(vinyl.classList.contains('toggle')){
  //   vinyl.classList.remove('toggle');
  // } else {
  //   vinyl.classList.add('toggle');
  // }

  // jQuery
  // var $vinyl = $(this).find('.album-vinyl');
  //
  // $vinyl.toggleClass('toggle');
  //
  // if($vinyl.hasClass('toggle')){
  //   $vinyl.removeClass('toggle');
  // } else {
  //   $vinyl.addClass('toggle');
  // }

})(this, this.jQuery);
