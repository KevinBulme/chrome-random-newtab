const DEFAULT_PAGES = ["https://www.google.com"];
const DEFAULT_RANDOM = true;
const DEFAULT_INDEX = 0;

function set_new_index(index, length){
  if(index < length - 1){
    index ++;
  }else{
    index = 0;
  }
  chrome.storage.sync.set({
    index: index,
  }, function() {});
}

(function(){
  chrome.storage.sync.get({
    pages: DEFAULT_PAGES,
    random: DEFAULT_RANDOM,
    index: DEFAULT_INDEX
  }, function(items) {
    const urls = items.pages;
    let index = items.index;
    if(items.random){
      index = Math.floor(Math.random()*urls.length);
    }else{
      set_new_index(index, urls.length);
    }
    chrome.tabs.update({ url: urls[index], highlighted: true });
  });
}());