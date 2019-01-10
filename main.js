chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
		document.getElementById('status').innerHTML = "Blindingly Green Killed!"
  });