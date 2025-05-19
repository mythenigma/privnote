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
  // 首先尝试从URL路径中获取笔记ID
  const path = window.location.pathname;
  console.log('当前路径:', path);
  const pathMatches = path.match(/\/priv\/([0-9]+)(?:\/|$)/);
  
  // 然后检查查询参数中是否有笔记ID
  const urlParams = new URLSearchParams(window.location.search);
  const queryNoteId = urlParams.get('note');
  console.log('路径匹配结果:', pathMatches ? pathMatches[1] : '无匹配');
  console.log('查询参数note:', queryNoteId);
  
  // 添加调试信息到页面
  const debugInfo = document.createElement('div');
  debugInfo.style.padding = '10px';
  debugInfo.style.margin = '10px 0';
  debugInfo.style.backgroundColor = '#f0f0f0';
  debugInfo.style.border = '1px solid #ddd';
  debugInfo.style.borderRadius = '4px';
  debugInfo.style.fontSize = '12px';
  debugInfo.innerHTML = `
    <div><strong>调试信息：</strong></div>
    <div>当前路径: ${path}</div>
    <div>路径匹配ID: ${pathMatches ? pathMatches[1] : '无匹配'}</div>
    <div>查询参数note: ${queryNoteId || '无'}</div>
  `;
  
  // 将调试信息添加到页面
  document.getElementById('noteContainer').appendChild(debugInfo);
  
  // 优先使用URL路径中的ID
  if (pathMatches && pathMatches[1]) {
    // 从URL路径中提取到笔记ID
    const pathNoteId = pathMatches[1];
    console.log('使用路径中的ID:', pathNoteId);
    showNote(pathNoteId);
  } 
  // 其次使用查询参数中的ID
  else if (queryNoteId) {
    // 使用查询参数中的笔记ID
    console.log('使用查询参数中的ID:', queryNoteId);
    showNote(queryNoteId);
  } 
  // 没有找到任何ID
  else {
    // 没有找到任何笔记ID
    console.log('未找到任何笔记ID');
    renderExpired();
  }
  }
});
