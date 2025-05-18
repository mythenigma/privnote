// Fallback script for privnote
// This script will be loaded via the onerror handler if the main script fails to load
// Store this as jsnopri08-fallback.js in the root directory

(function() {
  console.log('备用脚本已加载，处理可能的主脚本加载失败情况');
  
  // 从URL提取笔记ID的紧急功能
  function extractNoteId() {
    const url = window.location.href;
    const regex = /priv\/([^\/]+)(?:\/note)?/;
    const match = url.match(regex);
    if (match !== null) {
      return match[1];
    }
    return null;
  }
  
  // 显示错误消息和恢复指南
  function showErrorMessage() {
    const noteId = extractNoteId();
    const containerBox = document.getElementById('containerbox');
    
    if (containerBox) {
      let message = '<div class="alert alert-danger">';
      message += '<h4 class="alert-heading">脚本加载错误 / Script Loading Error</h4>';
      
      // 中英文双语错误消息
      message += '<p>加载必要的脚本时出现问题。<br>There was a problem loading the necessary scripts.</p>';
      
      if (noteId) {
        message += '<p>您正在尝试访问笔记: <strong>' + noteId + '</strong><br>';
        message += 'You were trying to access note: <strong>' + noteId + '</strong></p>';
        message += '<p>请尝试使用以下替代URL直接访问:<br>Try accessing it directly with these alternate URLs:</p>';
        message += '<ul>';
        message += '<li><a href="https://privnote.chat/priv/' + noteId + '">https://privnote.chat/priv/' + noteId + '</a></li>';
        message += '<li><a href="https://privnote.chat/priv/' + noteId + '/note">https://privnote.chat/priv/' + noteId + '/note</a></li>';
        message += '</ul>';
      }
      
      message += '<p>如果问题持续存在，请尝试清除浏览器缓存或使用不同的浏览器。<br>';
      message += 'If problems persist, try clearing your browser cache or using a different browser.</p>';
      
      // 添加刷新页面的按钮
      message += '<button onclick="window.location.reload()" class="btn btn-primary mt-3">刷新页面 / Refresh Page</button>';
      message += '</div>';
      
      containerBox.innerHTML = message;
    }
  }
  
  // 检查主要组件是否缺失，如果需要则显示错误
  function checkAndShowError() {
    if (typeof applyLanguage !== 'function' || typeof shouData !== 'function') {
      console.error('关键函数缺失，显示错误消息');
      showErrorMessage();
      
      // 尝试获取笔记ID并记录以备调试
      const noteId = extractNoteId();
      if (noteId) {
        console.log('故障恢复: 发现笔记ID', noteId, '但无法加载主脚本');
      }
    }
  }
  
  // 等待短暂时间以查看主脚本是否加载，然后检查
  setTimeout(checkAndShowError, 2000);
  
  // 提供基本的语言切换作为备用
  window.applyLanguage = window.applyLanguage || function(lang) {
    console.log('使用备用语言切换功能: ' + lang);
    localStorage.setItem('selectedLanguage', lang);
    
    // 尝试至少更新页面标题
    const langTitles = {
      'en': 'Privnote - Encrypts your notes with links, zero-width characters, or binary',
      'zh': 'Privnote隐信云 - 加密您的笔记，使用链接、零宽字符或二进制'
    };
    
    if (langTitles[lang]) {
      document.title = langTitles[lang];
    }
  };
  
  // 如果页面上有语言切换按钮，确保它们正常工作
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-language');
      window.applyLanguage(lang);
      window.location.reload(); // 刷新页面尝试重新加载脚本
    });
  });
})();
