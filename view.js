// view.js: Only for viewing a note by id, with password support and self-destruct logic

// Helper: fetch note data from backend
async function fetchNote(noteId, password) {
  const data = new FormData();
  data.append('e', noteId);
  if (password) data.append('myth', password);
  try {
    const response = await fetch('https://maipdf.com/baidu.php', {
      method: 'POST',
      body: data
      // 不再需要 credentials: 'include'
    });
    return await response.text();
  } catch (e) {
    return null;
  }
}

function renderLoading() {
  document.getElementById('noteContainer').innerHTML = '<div class="spinner">Loading...</div>';
}

function renderExpired() {
  document.getElementById('noteContainer').innerHTML = '<div class="note-expired">This note has expired or does not exist.</div>';
}

function renderPassword(noteId, errorMsg = '') {
  document.getElementById('noteContainer').innerHTML = `
    <div class="note-title">Password Required</div>
    <div class="note-password">
      <input type="password" id="notePassword" placeholder="Enter password">
      <button id="viewBtn">View</button>
      <div style="color:#b71c1c;margin-top:0.5rem;">${errorMsg}</div>
    </div>
  `;
  document.getElementById('viewBtn').onclick = async function() {
    const pwd = document.getElementById('notePassword').value;
    renderLoading();
    await showNote(noteId, pwd);
  };
}

function renderNote(content, expireMsg = '') {
  document.getElementById('noteContainer').innerHTML = `
    <div class="note-title">Note Content</div>
    <div class="note-content">${content}</div>
    ${expireMsg ? `<div class="note-expired">${expireMsg}</div>` : ''}
  `;
}

async function showNote(noteId, password = '') {
  renderLoading();
  const result = await fetchNote(noteId, password);
  if (!result || result === 'filenotexist') {
    renderExpired();
    return;
  }
  if (result.includes('æ')) {
    // Format: ...æ...æpasswordæ...
    const arr = result.split('æ');
    // 密码保护
    if (arr[2] && arr[2] !== 'mythenigma') {
      if (password && arr[2] !== password) {
        renderPassword(noteId, 'Wrong password, try again.');
      } else {
        renderPassword(noteId);
      }
      return;
    }
    // Note exists, show content
    const noteContent = arr[arr.length - 1];
    let expireMsg = '';
    if (arr[0] === '0') expireMsg = 'This note will self-destruct after reading.';
    renderNote(noteContent, expireMsg);
  } else {
    // Already expired or destroyed
    renderExpired();
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // 只支持 /note/xxx 路径
  const match = window.location.pathname.match(/^\/note\/(\d+)$/);
  let noteId = match ? match[1] : null;
  const noteContainer = document.getElementById('noteContainer');
  if (!noteId) {
    noteContainer.innerHTML = '<div class="note-expired">Invalid URL format. Must be /note/number</div>';
    return;
  }
  // Debug info: show noteId
  noteContainer.innerHTML = `<div style="color:#1976d2;font-weight:bold;">[Debug] Current noteId: ${noteId}</div>`;
  showNoteDebug(noteId);
});

// 调试版 showNote，显示所有细节
async function showNoteDebug(noteId, password = '') {
  renderLoading();
  const result = await fetchNote(noteId, password);
  const noteContainer = document.getElementById('noteContainer');
  let debugHtml = `<div style="color:#1976d2;font-weight:bold;">[Debug] noteId: ${noteId}</div>`;
  debugHtml += `<div style="color:#333;">[Debug] fetch result:<pre style='background:#f5f5f5;border:1px solid #eee;padding:8px;'>${result ? result.replace(/</g,'&lt;') : '(no response)'}</pre></div>`;
  if (!result || result === 'filenotexist') {
    debugHtml += '<div class="note-expired">This note has expired or does not exist.</div>';
    noteContainer.innerHTML = debugHtml;
    return;
  }
  if (result.includes('æ')) {
    // Format: ...æ...æpasswordæ...
    const arr = result.split('æ');
    debugHtml += `<div style='color:#333;'>[Debug] server split fields:<pre style='background:#f5f5f5;border:1px solid #eee;padding:8px;'>${JSON.stringify(arr, null, 2)}</pre></div>`;
    debugHtml += `<div style='color:#b71c1c;'>[Debug] password field (3rd): ${arr[2] ? arr[2] : '(none)'}</div>`;
    // Password protection
    if (arr[2] && arr[2] !== 'mythenigma') {
      debugHtml += `<div style='color:#b71c1c;'>[Debug] Password required, current input: ${password ? password : '(none)'}</div>`;
      if (password && arr[2] !== password) {
        debugHtml += `<div style='color:#b71c1c;'>[Debug] Wrong password</div>`;
        debugHtml += `<div class="note-title">Password Required</div>
        <div class="note-password">
          <input type="password" id="notePassword" placeholder="Enter password">
          <button id="viewBtn">View</button>
          <div style="color:#b71c1c;margin-top:0.5rem;">Wrong password, try again.</div>
        </div>`;
        noteContainer.innerHTML = debugHtml;
        document.getElementById('viewBtn').onclick = async function() {
          const pwd = document.getElementById('notePassword').value;
          renderLoading();
          await showNoteDebug(noteId, pwd);
        };
        return;
      } else {
        debugHtml += `<div class='note-title'>Password Required</div>
        <div class='note-password'>
          <input type='password' id='notePassword' placeholder='Enter password'>
          <button id='viewBtn'>View</button>
          <div style='color:#b71c1c;margin-top:0.5rem;'></div>
        </div>`;
        noteContainer.innerHTML = debugHtml;
        document.getElementById('viewBtn').onclick = async function() {
          const pwd = document.getElementById('notePassword').value;
          renderLoading();
          await showNoteDebug(noteId, pwd);
        };
        return;
      }
    }
    // Note exists, show content
    const noteContent = arr[arr.length - 1];
    let expireMsg = '';
    if (arr[0] === '0') expireMsg = 'This note will self-destruct after reading.';
    debugHtml += `<div class="note-title">Note Content</div>
    <div class="note-content">${noteContent}</div>
    ${expireMsg ? `<div class="note-expired">${expireMsg}</div>` : ''}`;
    noteContainer.innerHTML = debugHtml;
  } else {
    debugHtml += '<div class="note-expired">This note has expired or does not exist.</div>';
    noteContainer.innerHTML = debugHtml;
  }
}
