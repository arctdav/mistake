
var $ = document.getElementById.bind(document);

// $('name').textContent = chrome.i18n.getMessage('name');
// $('topic').href = url;
// $('remove').onclick = function() {
//   chrome.management.uninstallSelf({showConfirmDialog: true});
//   window.close();
// };

var name_value = $('name').textContent

chrome.storage.sync.set({'name': name_value}, function() {
  console.log('Value is set to ' + value);
});

chrome.storage.sync.get(['name'], function(result) {
  console.log('Value currently is ' + result.key);
});
