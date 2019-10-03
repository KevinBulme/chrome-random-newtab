(function(){
  chrome.storage.sync.get(null, function(items) {
    const urls = items.pages;
    chrome.tabs.update({ url: urls[Math.floor(Math.random()*urls.length)], highlighted: true });
  });
}());