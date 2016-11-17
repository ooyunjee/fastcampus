(function(global, Ajax) {
  'use strict';

  var xhr = new Ajax();

  global.addEventListener('DOMContentLoaded', parsePageLoad);

  function parsePageLoad() {
    var page = this.location.hash.replace(/#!/, '');
    var ajax_call_btn;
    switch(page) {
      case 'txt':
        ajax_call_btn = ajax_call_btns[0];
      break;
      case 'html':
        ajax_call_btn = ajax_call_btns[1];
      break;
      case 'xml':
        ajax_call_btn = ajax_call_btns[2];
      break;
      case 'json':
        ajax_call_btn = ajax_call_btns[3];
      break;
    }
    AjaxCalling.call(ajax_call_btn);
  }

  var ajax_call_btns = document.querySelectorAll('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  [].forEach.call(ajax_call_btns, function(btn) {
    btn.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var xhr       = new XMLHttpRequest();
    var method    = 'GET', url, async = true;
    var data_type = this.classList.item(1);
    url = './data/' + data_type.replace(/-/, '.');

    xhr.open(method, url, async);
    xhr.send();
    xhr.addEventListener('readystatechange', printData.bind(xhr, url));
  }

  function printData(url) {
    url = url.split('.');
    var type = url[url.length - 1];

    // XMLHttpRequest.DONE: 4
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
        case 'html':
          ajax_call_data_result.innerHTML = this.responseText;
        break;
          ajax_call_data_result.innerHTML = this.response;
        break;
        case 'xml':
          var xml_doc = this.responseXML;
          var people = xml_doc.getElementsByTagName('person');
          var html_template = '';
          var xml_template = '';

          for(var i = 0, l = people.length; i < l; i++) {
            var person = people[i];
            var person_name = person.getElementsByTagName('name')[0].firstChild.nodeValue;
            var person_tel = person.getElementsByTagName('tel')[0].firstChild.nodeValue;
            var person_mail = person.getElementsByTagName('mail')[0].firstChild.nodeValue;
            xml_template += '<tr>';
            xml_template +=   '<td>' + person_name + '</td>';
            xml_template +=   '<td>' + person_tel  + '</td>';
            xml_template +=   '<td>' + person_mail + '</td>';
            xml_template += '</tr>';
          }
          html_template += '<table border="1">';
          html_template +=   '<caption>XML TABLE</caption>';
          html_template +=   '<tr>';
          html_template +=     '<th scope="col">picture</th>';
          html_template +=     '<th scope="col">name</th>';
          html_template +=     '<th scope="col">gender</th>';
          html_template +=   '</tr>';
          html_template +=   xml_template;
          html_template += '</table>';

          ajax_call_data_result.innerHTML = html_template;
        break;
        case 'json':
          var txt2json_obj = global.JSON.parse(this.response);
          var json_template = [];
          // var html_template = [];

          json_template.push(`
            <table border="1">
              <caption>JSON TABLE</caption>
              <tr>
                <th scope="col">picture</th>
                <th scope="col">name</th>
                <th scope="col">gender</th>
                <th scope="col">cell</th>
                <th scope="col">mail</th>
                <th scope="col">location</th>
              </tr>
              `);

          txt2json_obj.results.forEach(function(obj, idx) {
            var person_picture = obj.picture.thumbnail;
            var person_name = obj.name.first + ' ' + obj.name.last;
            var person_gender = obj.gender;
            var person_cell = obj.cell;
            var person_email = obj.email;
            var person_location = obj.location.street + ', ' + obj.location.city + ', ' + obj.location.state;

            json_template.push(`
              <tr>
                <td><img src="${person_picture}"></td>
                <td>${person_name}</td>
                <td>${person_gender}</td>
                <td>${person_cell}</td>
                <td>${person_email}</td>
                <td>${person_location}</td>
              </tr>
              `);

            // json_template += '<tr>';
            // json_template +=   '<td><img src="' + person_picture  + '"></td>';
            // json_template +=   '<td>' + person_name + '</td>';
            // json_template +=   '<td>' + person_gender  + '</td>';
            // json_template +=   '<td>' + person_cell  + '</td>';
            // json_template +=   '<td>' + person_email + '</td>';
            // json_template +=   '<td>' + person_location + '</td>';
            // json_template += '</tr>';
          });
          json_template.push(`</table>`);

          // html_template += '<table border="1">';
          // html_template +=   '<caption>JSON TABLE</caption>';
          // html_template +=   '<tr>';
          // html_template +=     '<th scope="col">picture</th>';
          // html_template +=     '<th scope="col">name</th>';
          // html_template +=     '<th scope="col">gender</th>';
          // html_template +=     '<th scope="col">cell</th>';
          // html_template +=     '<th scope="col">mail</th>';
          // html_template +=     '<th scope="col">location</th>';
          // html_template +=   '</tr>';
          // html_template +=   json_template;
          // html_template += '</table>';
          ajax_call_data_result.innerHTML = json_template.join('');
        break;
      }
    }

    global.location.hash = '!' + type;
  }


})(this, this.XMLHttpRequest);
