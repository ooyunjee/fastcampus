// DOM
// 문서 객체 모델

// document {}
(function(global) {
  var document = global.document;

  // 참조된 document {}를 통해 documentElement 객체를 참조
  var html = document.documentElement;
  var head, body;

  head = document.head;
  body = document.body;

  // 문서 <p> 요소의 집합
  // HTML 문서에서 찾은 요소 노드의 집합 => 유사 배열
  var p_elements = document.getElementsByTagName('p');
  var first_p = p_elements.item(0);

  var strong_element = first_p.firstChild;
  var last_text = first_p.lastChild;

  // console.log('strong_element:', strong_element);
  // console.log('last_text: ', last_text);

  strong_element.parentNode;
  last_text.parentNode;

  console.log(strong_element.nextSibling === last_text);
  console.log(last_text.previousSibling === strong_element);

  // ------------------------------------------------------------------------

  var dom_test_first = document.getElementById('dom-test-first');
  var dom_test_second = document.getElementById('dom-test-second');
  var dom_test_last = document.getElementById('dom-test-last');

  console.log(dom_test_first);
  console.log(dom_test_first.firstChild.nextSibling);
  console.log(dom_test_second.firstChild.nextSibling.nextSibling);
  console.log(dom_test_last.firstChild.nextSibling.nextSibling);

  // ------------------------------------------------------------------------

  var filtered_second = [];
  for (var i = 0, l = dom_test_second.childNodes.length; i < l; i++) {
    var node = dom_test_second.childNodes.item(i);

    // 노드의 유형(type) 1, 2, 3, 8
    if(node.nodeType === document.ELEMENT_NODE) {
      filtered_second.push(node);
    }
    if(node.nodeType === document.TEXT_NODE) {
      if(node.nodeValue !== '') {
        filtered_second.push(node);
      }
    }
  }
  console.log(filtered_second);

  // ------------------------------------------------------------------------

})(this);

var dom_test_first = document.getElementById('dom-test-first');

function addTitle(node, content) {
  if(typeof content !== 'string') { throw new Error(); }
  if(node.nodeType !== 1) { throw new Error(); }
  // HTML DOM
  node.title = content;
  // XML DOM
  // node.setAttribute('title', content);
}

function addDataTitle(node ,data, value) {
  if(typeof data !== 'string') { throw new Error(); }
  if(node.nodeType !== 1) { throw new Error(); }

  // HTML DOM
  node.title = value;
  // XML DOM
  node.setAttribute('data-'+data, value);
}

addTitle(dom_test_first, '123');
addDataTitle(dom_test_first, 'title', '123');
