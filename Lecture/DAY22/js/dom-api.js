/*! DOM API */

(function(global) {
  'use strict';

  // 선택 -------------------------------------------------------------------------------------------
  // (ELEMENT_NODE || document).getElementById();
  // (ELEMENT_NODE || document).getElementsByTagName();
  // (ELEMENT_NODE || document).getElementByClassName();
  // (ELEMENT_NODE || document).querySelector();
  // (ELEMENT_NODE || document).querySelectorAll();

  // 탐색 -------------------------------------------------------------------------------------------
  // PARENT_NODE: parentNode

  // CHILD_NODE | NODE_LIST:
  // .firstChild, .lastChild, .childNodes, .child
  // .firstElementChild, .lastElementChild

  // SIBLING_NODE:
  // .nextSibling, .previousSibling
  // .nextElementSibling, .previousElementSibling

  // 삽입(추가) -------------------------------------------------------------------------------------------
  // PARENT_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.appendChild(CHILD_NODE)
  // TARGET_NODE.parentNode.insertBefore(INSERT_NODE, TARGET_NODE)

  // 제거 -------------------------------------------------------------------------------------------
  // PARENT_NODE.removeChild(CHILD_NODE)
  // CHILD_NODE.parentNode.removeChild(CHILD_NODE)

  // 대체 -------------------------------------------------------------------------------------------
  // node를 다른 node와 위치를 서로 변경하는 것이 아님
  // 기존 node를 제거(반환) 후, 새로운 node를 해당 위치에 대체하는 것
  // TARGET_NODE.parentNode.replaceChild(REPLACE_CHILD, TARGET_NODE)

  var gnb = document.querySelector('.gnb');
  var target_p = document.querySelector('.target-paragraph');

  console.log(gnb);
  console.log(target_p);

  // 코드 갈무리
  function bindEvent(container_el, target_selector) {
    if(!container_el || container_el.nodeType !== 1) {
      throw new Error('첫번째 인자는 요소 노드를 전달해야 합니다.');
    }

    target_selector = target_selector || 'a';

    var bind_els = container_el.querySelectorAll(target_selector);
    console.log(bind_els);

    for(var i = 0, l = bind_els.length; i < l; i++) {
      var el = bind_els[i];
      el.onclick = changePositionStrongElement;
    }
  }

  bindEvent(gnb);

  function replaceStrongElement() {
    // 대체
    var target_strong = target_p.querySelector('strong');

    var replace_el = this.parentNode.replaceChild(target_strong, this);

    // 브라우저의 기본 동작을 차단
    // 오래 전 방법
    return false;
  }

  function changePositionStrongElement() {
    var parent = this.parentNode;
    var target_strong = target_p.querySelector('strong');
    var target_strong_next_sibling = target_strong.nextSibling;
    // console.log(target_strong_next_sibling);

    var replace_el = parent.replaceChild(target_strong, this);
    target_strong_next_sibling.parentNode.insertBefore(this, target_strong_next_sibling)

    return false;
  }

  // 복사 -------------------------------------------------------------------------------------------
  // jquery: 이벤트 복제
  // dom script: 이벤트 복제 안됨
  var copy_btn = document.querySelector('.copy-gnb-button');
  var copyzone = document.querySelector('.copyzone');


  copy_btn.onclick = function() {
    var deep_copy_gnb = gnb.cloneNode(true);

    bindEvent(deep_copy_gnb); // 재사용
    copyzone.appendChild(deep_copy_gnb);
  };

  // GET/SET
  // innerHTML

  // var html_code = '<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sunt cum, cupiditate, fuga ipsa sit sint consequatur sapiente. Optio, sint?</p></blockquote>';
  //
  // console.log( '$.query(\'body\').innerHTML:', document.body.innerHTML );
  //
  // var body = document.body;
  //
  // body.innerHTML = html_code + body.innerHTML;
  //
  // innerHTML: 요소블럭의 HTML 문서 전체를 텍스트로 가져옴. 자식 다 포함됨.
  // 동적으로 코드를 가져와 화면에 보여줌

  console.log('%c------------------------------', 'color: #3d9a21');

  var body = document.body;
  var data = 'data';

  var table_caption = 'this is table caption';

  // 방법 0.
  // var table_code = '<table border="1" class="fds-table"><caption>'+ table_caption +'</caption><thead><tr><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th></tr></thead><tbody><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr></tbody></table>';

  // 방법 1.
  // var table_code = '';
  // table_code += '<table border="1" class="fds-table">';
  // table_code +=   '<caption>' + table_caption + '</caption>';
  // table_code +=   '<thead>';
  // table_code +=      '<tr>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=         '<th scope="col">heading</th>';
  // table_code +=      '</tr>';
  // table_code +=   '</thead>';
  // table_code += '</table>'

  // 방법 2.
  // 코드를 배열로 만들어서 합친다.
  // 특정 부분을 찾아 수정할 때 어렵다.
  // var table_code = [
  //   '<table border="1" class="fds-table">',
  //     '<caption>' + table_caption + '</caption>',
  //     '<thead>',
  //       '<tr>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //         '<th scope="col">heading</th>',
  //       '</tr>',
  //     '</thead>',
  // ].join('');

  // 방법 3.
  // ECMAScript 2015
  // var table_code = `
  //   <table border="1" class="fds-table">
  //     <caption>${table_caption}</caption>
  //     <thead>
  //       <tr>
  //         <th scope="col">${table_heading_1}</th>
  //         <th scope="col">${table_heading_2}</th>
  //         <th scope="col">${table_heading_3}</th>
  //         <th scope="col">${table_heading_4}</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //       <tr>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //         <td>data</td>
  //       </tr>
  //     </tbody>
  //   </table>
  // `;

  // ES6  -> BabelJS     -> ES5
  // Sass -> Sass Engine -> CSS
/*
  var table_code = "\n    <table border=\"1\" class=\"fds-table\">\n      <caption></caption>\n      <thead>\n        <tr>\n          <th scope=\"col\">1</th>\n          <th scope=\"col\">2</th>\n          <th scope=\"col\">3</th>\n           <th scope=\"col\">4</th>\n       </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n      </tbody>\n    </table>\n  ";
*/
  // body.innerHTML = table_code + body.innerHTML;

  // ---------------------------------------------------------------------------------------
  var nav = document.querySelector('#gnb');
  console.log(nav);

  // nav 요소의 앞에 형제요소 <div>를 추가하라.
  nav.insertAdjacentHTML('beforebegin', '<div class="insert-div">beforebegin</div>');
  // nav 요소의 첫번째 자식요소로 <div>를 추가하라.
  nav.insertAdjacentHTML('afterbegin', '<div class="insert-div">afterbegin</div>');
  // nav 요소의 마지막 자식요소로 <div>를 추가하라.
  nav.insertAdjacentHTML('beforeend', '<div class="insert-div">beforeend</div>');
  // nav 요소의 뒤에 형제요소로 <div>를 추가하라.
  nav.insertAdjacentHTML('afterend', '<div class="insert-div">afterend</div>');

}); //(this)

// section1 가져오기
// section2 가져오기
// section1에서 버튼 검사
// 버튼 누르면
// 보더 주고
// 두번째 버튼 눌렸는지 검사
// 두번째 버튼 보더줌
// 눌린 버튼 교체
// 보더 지우기
// 다시 section1 버튼 누르면
// 반복실행
(function(global) {
  'use strict';



  // function twoImageChange() {
  //   // console.log('twoImageChange');
  //   // validation
  //   // if(!section_1 || section_1.nodeType !== 1) {
  //   //   throw new Error('두번째 인자는 요소 노드를 전달해야 합니다.');
  //   // }
  //   // if(!section_2 || section_2.nodeType !== 1) {
  //   //   throw new Error('첫번째 인자는 요소 노드를 전달해야 합니다.');
  //   // }
  //   //
  //   var section_1 = container.querySelector('.section-1');
  //   var section_2 = container.querySelector('.section-2');
  //
  //   var btns_1 = section_1.querySelectorAll('button');
  //   var btns_2 = section_2.querySelectorAll('button');
  //
  //   for(var i = 0, l = btns_1.length; i < l; i++) {
  //     var btn_1 = btns_1[i];
  //
  //     btn_1.onclick = changPosition;
  //   }
  //
  //   // 이미지 border 추가 메소드
  //   function changeStyle(btn) {
  //     btn.style.border = '5px solid #913c3c';
  //   }
  //
  //   // 이미지 border 삭제 메소드
  //   function resetBtnStyle(btn) {
  //     btn.style.border = 0;
  //   }
  //
  //   function changPosition() {
  //     console.log('btn-1 clicked');
  //     console.log(btns_1);
  //     var first_box = this;
  //
  //     changeStyle(first_box);
  //
  //     for(var i = 0, l = btns_2.length; i < l; i++) {
  //       var btn_2 = btns_2[i];
  //
  //       btn_2.onclick = function() {
  //         console.log('btn-2 clicked');
  //         console.log(btns_2);
  //         var second_box = this;
  //
  //         var second_box_next = second_box.nextSibling;
  //
  //         // 두번째 image에 border 설정
  //         changeStyle(second_box);
  //
  //         // image 교체
  //         first_box.parentNode.replaceChild(second_box, first_box);
  //         second_box_next.parentNode.insertBefore(first_box, second_box_next);
  //
  //         // 이미지 border 삭제
  //         resetBtnStyle(first_box);
  //         resetBtnStyle(second_box);
  //
  //         btns_1 = section_1.querySelectorAll('button');
  //         btns_2 = section_2.querySelectorAll('button');
  //
  //         // console.log(section_1);
  //         // console.log(section_2);
  //         console.log(btns_1);
  //         console.log(btns_2);
  //       };
  //     }
  //   }
  //
  // }

  // twoImageChange();



}); //(this)
