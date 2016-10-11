// .querySelector()
// 문서객체를 식별하는 CSS 선택자를 통해 문서객체를 선택하여 반환한다.
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

btn_inc.onclick = function () {
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
}

function decreaseFontSize() {
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  console.log(current_font_size);
  if(current_font_size > 10) {
    var changed_font_size = current_font_size - 2;
    demo_text.style.fontSize = changed_font_size + 'px';
  }
}

function resetFontSize() {
  demo_text.style.fontSize = init_font_size;
}

// 사용자가 발생시키는 이벤트를 감지하여 처리되는 프로그래밍
// 문서 객체를 선택한 후, 해당 객체에 이벤트 속성에 함수를 연결한다.
// 대상객체.이벤트속성 = 이벤트핸들러(함수);
// btn_inc.onclick = increaseFontSize;
btn_dec.onclick = decreaseFontSize;
btn_reset.onclick = resetFontSize;
