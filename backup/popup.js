
'use strict';

let save = document.getElementById('save');
save.onclick = function(element) {
  console.log("clicked");
  let topic = document.getElementById('topic').value;
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;

  let dict = {
    'topic': topic,
    'name': name,
    'des': description
  };

  chrome.storage.sync.set({'mistake': dict}, function() {
    alert(JSON.stringify(dict));
  });
};




// var $ = document.getElementById.bind(document);

// // $('name').textContent = chrome.i18n.getMessage('name');
// // $('topic').href = url;
// $('save').onclick = function() {
//   console.log("save clicked")
// };

// var name_value = $('name').textContent
// console.log(name_value)

// chrome.storage.sync.set({'name': name_value}, function() {
//   console.log('Value is set to ' + name_value);
// });

// chrome.storage.sync.get(['name'], function(result) {
//   console.log('Value currently is ' + result.key);
// });
