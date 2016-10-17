/**
 * @function isType 데이터 유형을 정확하게 감지하는 함수
 * @param  {everything}  data
 * @return {string}      데이터 유형을 문자열로 반환
 */

function isType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

/**
 * [isExist description]
 * @param  {[type]}  node [description]
 * @return {Boolean}      [description]
 */
function isExist(node) {
  return isType(node) !== 'null';
}
