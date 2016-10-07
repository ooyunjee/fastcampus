var btn_inc = document.querySelector('.button-increase-font-size');
var btn_dec = document.querySelector('.button-decrease-font-size');
var btn_reset = document.querySelector('.button-reset-font-size');
var demo_text = document.querySelector('.demo-text-area');

var init_font_size = window.getComputedStyle(demo_text).fontSize;

console.log(btn_inc);
console.log(btn_dec);
console.log(btn_reset);
console.log(demo_text);
console.log(init_font_size);

function increaseFontSize() {
  // 현재 폰트 사이즈 가져온다. (string)
  // 폰트사이즈 number로 바꾼다.
  // 폰트크기를 변경한다.
  // 변경된 폰트 사이즈 변수에 변경사항을 넣어주고 px 단위를 붙여준다.
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  console.log(current_font_size);
  if(current_font_size < 30) {
    var changed_font_size = current_font_size + 2;
    demo_text.style.fontSize = changed_font_size + 'px';
  }
};

function decreaseFontSize() {
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  console.log(current_font_size);
  if(current_font_size > 10) {
    var changed_font_size = current_font_size - 2;
    demo_text.style.fontSize = changed_font_size + 'px';
  }
};

function resetFontSize() {
  demo_text.style.fontSize = init_font_size;
};

btn_inc.onclick = increaseFontSize;
btn_dec.onclick = decreaseFontSize;
btn_reset.onclick = resetFontSize;
