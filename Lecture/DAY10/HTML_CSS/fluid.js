function calcPercent(col_px, width) {
  // 전체 페이지에서 x 컬럼이 차지하는 퍼센트: 1380 / x * 100
  // col-1: 1380 / 87 * 100
  var col_percent = col_px / width * 100;
  // console.log(col_percent);
  return col_percent;
}

// grid 변환
var grid_baseline_height = 10;
var grid_baseline_trans = 9;
var grid_baseline = 1;

var grid_col_width = 115;
var grid_col_trans = 14;
var grid_col = 87;
console.log(calcPercent(grid_baseline_trans, grid_col_width));

// Columns 변환
var col_array = [87, 202, 317, 432, 547, 662, 777, 892, 1007, 1122, 1237, 1352];

console.log('---------------col-----------------');
// for(var index in col_array) {
//   var col = (col_array[index]);
//   console.log('col-' + ( window.parseInt(index) + 1 ) + ': ' + calcPercent(col, 1380));
// }
col_array.forEach(function(item, index) {
  console.log('col-' + ( index + 1 ) + ': ' + calcPercent(item, 1380));
});

// Push 변환
var push_array = [115, 230, 345, 460, 575, 690, 805, 920, 1035, 1150, 1265, 1380];

console.log('---------------push-----------------');
push_array.forEach(function(item, index) {
  console.log('push-' + ( index + 1 ) + ': ' + calcPercent(item, 1380));
});

// Prefix 변환
var prefix_array = [129, 244, 359, 474, 589, 704, 819, 934, 1049, 1164, 1279, 1394];

console.log('---------------prefix-----------------');
prefix_array.forEach(function(item, index) {
  console.log('prefix-' + ( index + 1 ) + ': ' + calcPercent(item, 1380));
});

// isolate order 변환
console.log('---------------isolate-----------------');
var isolate_array = [14, 129, 244, 359, 474, 589, 704, 819, 934, 1049, 1164, 1279];

isolate_array.forEach(function(item, index) {
  console.log('isolate-order-' + ( index+1 ) + ': ' + calcPercent(item, 1380));
});
