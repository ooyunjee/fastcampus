var n = 9;
console.log(typeof n);
console.log(typeof (n+''));

var k = 1234;
console.log('k: ', k);
console.log('typeof k: ', typeof k);

k = String(k);
console.log('k: ', k);
console.log('typeof k: ', typeof k);

var m = 9999;
m = m.toString();
console.log('m: ', m);
console.log('typeof m: ', typeof m);

// camelCase
function showMeTheMoney() {}
showMeTheMoney();

var u = '23435';
console.log(u-0);
console.log(u*1);
console.log(u/1);

var uu = '1324123em';
console.log(uu-0); // NaN: Not a number

var h = '34';
h += h;
console.log('h: ', h);

var r= '2.34335';
r = Number(r);
console.log('r: ', r);

var font_size = '32.3px';
var parse_int = window.parseInt(parse_int, 10);
var parse_float = window.parseFloat(parse_float, 10);

console.log('parse int:', parse_int);
console.log('parse float:', parse_float);

console.log('----------------------------------------');

// UI KIT
function computedFontSize(text_scale, heading_num) {
  var font_size1 = 1;
  for(var i = 0; i < heading_num; i++) {
    // console.log(text_scale);
    font_size1 *= text_scale;
    // console.log(text_scale);
  }
  return font_size1;
}

function computedLineHight(font_size_ratio, line_height_ratio) {
  console.log(Math.ceil(font_size_ratio/line_height_ratio));
  var lineHeight = 3 * (line_height_ratio/font_size_ratio);
  return lineHeight;
}

function computedMarginTop(lineHeight) {
  return lineHeight / 2;
}

var font_size = computedFontSize(1.313, 5);
var line_height = computedLineHight(font_size, 1.5);
var margin_top = computedMarginTop(line_height);

console.log('font-size: ', font_size);
console.log('line-height: ', line_height);
console.log('margin-top: ', margin_top);

console.log('----------------------------------------');

function assignGuideClass() {
  var body = document.body;
  var body_current_class = body.getAttribute('class');
  if(body_current_class == 'container guide'){
    body.setAttribute('class', 'container');
  } else {
    body.setAttribute('class', body_current_class + ' guide');  
  }
}

document.onclick = assignGuideClass;
