// Saves options to chrome.storage
function save_options() {
    var replacement_percentage = document.getElementById('replacement_percentage').value;    
    var  nsfwSource = document.getElementById('nsfw_source').value;
    chrome.storage.sync.set({
        replacement_percentage: replacement_percentage,
        nsfwSource: nsfwSource
      }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('saveStatus');
        status.textContent = 'Options saved.';
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default replacement percentage 10% and default picture is the first nsfw in yandex (for me)
    chrome.storage.sync.get({
        replacement_percentage: 10,
        nsfwSource: "https://avatars.mds.yandex.net/get-pdb/909049/ec3fce40-b67b-4f30-b76f-8d7d1a490e7e/s1200?webp=false"
      }, function(items) {
        document.getElementById('replacement_percentage').value = items.replacement_percentage;
        document.getElementById('nsfw_source').value = items.nsfwSource;
      });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('saveBtn').addEventListener('click',
      save_options);