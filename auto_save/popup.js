const list = document.getElementById('list');
chrome.storage.local.get(null, function(result) {
  Object.keys(result).forEach(key => {
    const item = document.createElement('div');

    item.textContent = `${key}: ${JSON.stringify(result[key])}`;
    list.appendChild(item);
  });
});