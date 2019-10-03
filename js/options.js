const DEFAULT_PAGES = ["https://www.google.com"];
const DEFAULT_RANDOM = true;

// Saves options to chrome.storage.
function save_options() {
  const pages = get_pages();
  const isRandom = document.getElementById('random').checked;
  chrome.storage.sync.set({
    pages: pages,
    random: isRandom
  }, function() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores the options state using the preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    pages: DEFAULT_PAGES,
    random: DEFAULT_RANDOM
  }, function(items) {
    clean_pages();
    set_pages(items.pages);
    document.getElementById('random').checked = items.random;
  });
}

function add_empty_page(){
  add_page("");
}

function add_page(value){
  const pagesDiv = document.getElementById('pages');
  const wrapper = document.createElement("span");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "page";
  input.value = value;
  wrapper.appendChild(input);
  const button = document.createElement("button");
  button.name = "removePage";
  button.innerText = "X";
  button.addEventListener('click', remove_page);
  wrapper.appendChild(button);
  pagesDiv.appendChild(wrapper);
}

function remove_page(e){
  e.target.parentElement.remove();
}

function get_pages(){
  const pages = [];
  document.getElementsByName('page').forEach(page => {
    pages.push(page.value);
  });
  return pages;
}

function set_pages(pages){
  if(pages){
    pages.forEach(page => {
      add_page(page);
    });
  }else{
    add_page();
  }
}

function clean_pages(){
  const pagesDiv = document.getElementById('pages');
  pagesDiv.innerHTML = "";
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('addPage').addEventListener('click', add_empty_page);
document.getElementsByName('removePage').forEach(element => {
  element.addEventListener('click', remove_page);
});