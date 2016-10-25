var gallery = document.querySelector('.container');
var gallery_control_btns = gallery.querySelectorAll('button');
var gallery_view = gallery.querySelector('.gallery-view');

var changeGalleryView = function() {
  var img = this.querySelector('img');
  var view = gallery_view.querySelector('img');

  var src = img.getAttribute('src');
  var alt = img.getAttribute('alt');
  var changed_src = src.replace('thumbs', 'big');

  // 설정
  view.setAttribute('src', changed_src);
  view.setAttribute('alt', alt);
}

for(var i = 0; i<gallery_control_btns.length; i++) {
  gallery_control_btns[i].onclick = changeGalleryView;
}

// var btns = document.querySelectorAll('.control-btn');
// // push in btns => false, 유사배열이기때문
// var btn_1 = btns[0];
// var btn_2 = btns[1];
// var btn_3 = btns[2];
// var main_view = document.querySelector('.main-view')
// console.log(btns);
// console.log(btn_1);
//
// for ( var i = 0 ; i <btns.length ; i++) {
//   console.log(i);
//   if(i === 0) {
//     btn_1.onclick = function() {
//
//     };
//     // 순환할때마다 변수 생성 => 변수에 할당
//   }
// }
