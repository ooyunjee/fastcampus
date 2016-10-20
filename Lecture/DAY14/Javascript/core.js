var btn_toggle = document.querySelector('.btn-normal');
var is_button_pressed = false;
// console.log(btn_toggle);
//
// function btnToggle() {
//   var assigned_class= btn_toggle.getAttribute('class');
//
//   if(assigned_class === 'btn-normal') {
//     btn_toggle.setAttribute('class', 'btn-pressed');
//   } else {
//     btn_toggle.setAttribute('class', 'btn-normal');
//   }
//
//   if(btn_toggle.innerHTML === 'Normal State' ) {
//     btn_toggle.innerHTML = 'Pressed State';
//   } else {
//     btn_toggle.innerHTML = 'Normal State';
//   }
// }
//
// btn_toggle.onclick = btnToggle;
console.log(btn_toggle.firstChild.nodeValue);
function toggleButtonAction() {

  if(is_button_pressed === true) {
    // 눌려지지 않은 상태로 변경
    is_button_pressed = false;
    // 버튼 Normal View로 변경
    btn_toggle.firstChild.nodeValue  = 'Normal State';
    btn_toggle.classList.remove('pressed');

  } else {
    // 눌려진 상태로 변경
    is_button_pressed = true;
    // 버튼 Pressed View로 변경
    btn_toggle.firstChild.nodeValue  = 'Pressed State';
    btn_toggle.classList.add('pressed');
  }
}

btn_toggle.onclick = toggleButtonAction;
