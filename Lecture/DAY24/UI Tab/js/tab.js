this.FDS = (function() {

  var forEach = Array.prototype.forEach;

  // 외부에서 접근 불가능한 생성자 함수
  function Tab(el) {
    this.el = document.querySelector(el);
    this.tabs = null;
    this.panels = null;
    this.panelWrapper = null;
    this.active_index = 0;
    this.init();
  }

  Tab.prototype = {
    'init': function() {
      // this.el <- .tab-container
      this.el.classList.add('tab-container');

      // ul 요소에 tab-list class를 붙여줌
      this.el.querySelector('ul').classList.add('tab-list');

      // a 요소에 tab class를 붙여줌
      this.tabs = this.el.querySelectorAll('a');
      forEach.call(this.tabs, function(tab) {
        tab.classList.add('tab');
      });

      var wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'tab-panel-wrapper');

      // tab-panel class를 붙여줌
      this.panels = this.el.querySelectorAll('div');
      forEach.call(this.panels, function(panel) {
        panel.classList.add('tab-panel');
        wrapper.appendChild(panel);
      });

      this.el.appendChild(wrapper);

      this.activeTab(this.active_index);

      this.events();
    },
    'removeTabs': function() {
      forEach.call(this.tabs, function(tab) {
        tab.classList.remove('active');
      });
    },
    'activeTab': function(active_index) {
      this.active_index = active_index;
      this.removeTabs();
      this.tabs.item(this.active_index).classList.add('active');
    },
    'events': function() {
      // this.el.addEventListner('click', )
    }
  };

  return {
    'Tab': Tab
  };

})(this);
