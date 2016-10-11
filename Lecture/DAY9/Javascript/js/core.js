var container = document.querySelector('.container');
var show_grid_btn = document.querySelector('.btn--show-grid');
var hide_grid_btn = document.querySelector('.btn--hide-grid');
console.log(show_grid_btn);

show_grid_btn.onclick = function() {
  var pre_assigned_class = container.getAttribute('class');

  if(pre_assigned_class.indexOf('show-grid') == -1) {
    container.setAttribute('class', pre_assigned_class + ' show-grid');
  }
};

hide_grid_btn.onclick = function() {
  var pre_assigned_class = container.getAttribute('class');
  var removed_class = pre_assigned_class.replace('show-grid', ' ').trim();
  container.setAttribute('class', removed_class);
};
