// 这个文件专门处理URL重定向
// 放在<head>中先于其他脚本加载，确保先处理重定向

// 立即执行的函数
(function() {
  // 获取当前URL
  var currentPath = window.location.pathname;
  
  // 检查是否是以/priv/开头的URL
  if (currentPath.indexOf('/priv/') === 0) {
    // 尝试匹配数字ID
    var matches = currentPath.match(/\/priv\/([0-9]+)(?:\/|$)/);
    
    if (matches && matches[1]) {
      // 找到数字ID，立即重定向到view.html
      var noteId = matches[1];
      console.log('检测到笔记ID: ' + noteId + '，正在重定向...');
      window.location.replace('/view.html?note=' + noteId);
      return; // 停止执行后续代码
    }
    
    // 如果没有数字ID但仍然是/priv/路径，也重定向到view.html
    console.log('检测到/priv/路径但没有有效ID，重定向到view.html...');
    window.location.replace('/view.html');
    return;
  }
  
  // 不需要重定向的情况，继续正常加载页面
  console.log('正常加载页面...');
})();
