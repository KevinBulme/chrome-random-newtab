// Saves options to chrome.storage.
function save_options() {
  const page = document.getElementById('pages').value;
  const pages = [];
  pages.push(page);
  chrome.storage.sync.set({
    pages: pages,
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
    pages: ["https://www.google.com"]
  }, function(items) {
    document.getElementById('pages').value = items.pages[0];
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);