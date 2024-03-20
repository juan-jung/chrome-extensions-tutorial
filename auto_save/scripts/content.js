const body = document.querySelector('body');

body.addEventListener('input', function(event) {
    var currentUrl = window.location.href;

    var data = {
      'modified_at': getCurrentTime(),
      'input_data': event.target.value
    };

    chrome.storage.local.set({[currentUrl]: data}, function() {
      console.log(currentUrl + " save success at " + data.modified_at);
    });
});

function getCurrentTime() {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = String(now.getDate()).padStart(2, '0');
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}



