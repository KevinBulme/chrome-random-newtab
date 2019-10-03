const DEFAULT_PAGES = ["https://www.google.com"];

(function(){
  chrome.storage.sync.get({pages: DEFAULT_PAGES}, function(items) {
    const urls = items.pages;
    chrome.tabs.update({ url: urls[Math.floor(Math.random()*urls.length)], highlighted: true });
  });
}());