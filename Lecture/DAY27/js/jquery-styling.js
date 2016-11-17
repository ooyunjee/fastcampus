/*! jquery-styling.js © yunjee, 2016 */

(function(global, $){
  'use strict';

  var $demo_container = $('.demo-container');
  console.log($demo_container);

  $demo_container.css('background', 'radial-gradient(#333, #000)');
  $demo_container.css({
    'flex-direction': 'column',
    'flex-wrap': 'wrap',
    'align-content': 'flex-start'
  });

  var container_props = $demo_container.css(['flex-flow', 'justify-content']);
  $('.album img').css({
    'display': function(idx, prop) {
      console.log(idx + ' '+ prop);
      if(idx === 2 && !container_props.display) {
        container_props.display = prop;
      } else {
        prop = 'inline-block';
        return prop;
      }
    }
  });

  var $album = $('.album');
  var $play_btn = $('.play-btn');
  var $btn_img = $('button img');
  var ironman_voice = document.createElement('audio');


  var is_clicked = false;
  ironman_voice.setAttribute('src', 'media/Beenzino-01-Dali, Van, Picasso.mp3');

  $play_btn.on('mouseenter', moveDisk);
  $play_btn.on('click', toggleDisk);
  // $play_btn.on('mouseenter', btnShow);
  // $play_btn.on('mouseout', btnHide);

  function moveDisk() {
    $album.find('.album-disk').addClass('move');
  }

  function btnShow() {
    $play_btn.css('opacity', 1);
  }
  function btnHide() {
    $play_btn.css('opacity', 0);
  }

  function toggleDisk() {
    if(is_clicked === false) {
      $album.find('.album-disk').removeClass('move').removeClass('stop').addClass('play');
      $btn_img.attr('src', 'images/pause-button.svg')
      ironman_voice.play();
      is_clicked = !is_clicked;
    } else if(is_clicked === true) {
      $album.find('.album-disk').removeClass('play').addClass('stop');
      $btn_img.attr('src', 'images/play-button.svg');
      ironman_voice.pause();
      is_clicked = !is_clicked;
    }
  }

  $('.demo-container').addClass(function(index, current_class) {
    // Native
    if(this.classList.contains('album-vinyl')){
      return 'source-vinyl-stream';
    }

    // jQuery
    if($(this).hasClass('album-vinyl')){
      return 'source-vinyl-stream';
    }
  });

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
  var $vinyl = $(this).find('.album-vinyl');

  $vinyl.toggleClass('toggle');

  if($vinyl.hasClass('toggle')){
    $vinyl.removeClass('toggle');
  } else {
    $vinyl.addClass('toggle');
  }

})(this, this.jQuery);
