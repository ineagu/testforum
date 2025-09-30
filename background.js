chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleContent
  });
});

function toggleContent() {
  if (document.body.style.display === 'none') {
    document.body.style.display = '';
  } else {
    document.body.style.display = 'none';
  }
}
