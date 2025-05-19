// view.js: Only for viewing a note by id, with password support and self-destruct logic

// Helper: fetch note data from backend
async function fetchNote(noteId, password) {
  const data = new FormData();
  data.append('e', noteId);
  if (password) data.append('myth', password);
  try {
    const response = await fetch('/baidu.php', { method: 'POST', body: data });
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
    if (arr[2] && arr[2] !== 'mythenigma') {
      // Password required
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
  const urlParams = new URLSearchParams(window.location.search);
  const noteId = urlParams.get('note');
  if (noteId) {
    // 尝试查看笔记
    showNote(noteId);
  } else {
    // 检查URL路径是否包含笔记ID (从/priv/数字格式中提取)
    const path = window.location.pathname;
    const matches = path.match(/\/priv\/([0-9]+)(?:\/|$)/);
    
    if (matches && matches[1]) {
      // 从URL路径中提取到笔记ID
      const pathNoteId = matches[1];
      // 重定向到正确的格式
      window.location.href = '/view.html?note=' + pathNoteId;
    } else {
      // 没有找到任何笔记ID
      renderExpired();
    }
  }
});
