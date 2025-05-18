// Fallback script for privnote
// This script will be loaded via the onerror handler if the main script fails to load
// Store this as jsnopri08-fallback.js in the root directory

(function() {
  console.log('Fallback script loaded');
  
  // Emergency extraction of note ID from URL
  function extractNoteId() {
    const url = window.location.href;
    const regex = /priv\/([^\/]+)(?:\/note)?/;
    const match = url.match(regex);
    if (match !== null) {
      return match[1];
    }
    return null;
  }
  
  // Display error message with instructions
  function showErrorMessage() {
    const noteId = extractNoteId();
    const containerBox = document.getElementById('containerbox');
    
    if (containerBox) {
      let message = '<div class="alert alert-danger">';
      message += '<h4 class="alert-heading">Script Loading Error</h4>';
      message += '<p>There was a problem loading the necessary scripts.</p>';
      
      if (noteId) {
        message += '<p>You were trying to access note: <strong>' + noteId + '</strong></p>';
        message += '<p>Try accessing it directly with these alternate URLs:</p>';
        message += '<ul>';
        message += '<li><a href="https://privnote.chat/priv/' + noteId + '">https://privnote.chat/priv/' + noteId + '</a></li>';
        message += '<li><a href="https://privnote.chat/priv/' + noteId + '/note">https://privnote.chat/priv/' + noteId + '/note</a></li>';
        message += '</ul>';
      }
      
      message += '<p>If problems persist, try clearing your browser cache or using a different browser.</p>';
      message += '</div>';
      
      containerBox.innerHTML = message;
    }
  }
  
  // Check if main components are missing and show error if needed
  function checkAndShowError() {
    if (typeof applyLanguage !== 'function' || typeof shouData !== 'function') {
      console.error('Critical functions missing, showing error message');
      showErrorMessage();
    }
  }
  
  // Wait a short time to see if main script loads, then check
  setTimeout(checkAndShowError, 2000);
  
  // Provide basic language switching as fallback
  window.applyLanguage = window.applyLanguage || function(lang) {
    console.log('Using fallback language switching for: ' + lang);
    localStorage.setItem('selectedLanguage', lang);
  };
})();
