// 这是一个用于测试不同URL格式的脚本
// 将此文件添加到HTML页面以检查URL解析

(function() {
  console.log('URL测试脚本加载');
  
  // 获取当前URL信息
  const url = window.location.href;
  const path = window.location.pathname;
  const hostname = window.location.hostname;
  
  console.log('完整URL:', url);
  console.log('路径:', path);
  console.log('主机名:', hostname);
  
  // 测试不同的笔记ID提取正则表达式
  const regex1 = /priv\/([^\/]+)/;
  const regex2 = /priv\/([^\/]+)(?:\/note)?/;
  const regex3 = /priv\/([^\/]+)(?:\/note)?\/?/;
  
  const match1 = path.match(regex1);
  const match2 = path.match(regex2);
  const match3 = path.match(regex3);
  
  console.log('正则1提取结果:', match1 ? match1[1] : 'null');
  console.log('正则2提取结果:', match2 ? match2[1] : 'null');
  console.log('正则3提取结果:', match3 ? match3[1] : 'null');
  
  // 检查关键DOM元素
  const containerBox = document.getElementById('containerbox');
  const grabifyElement = document.getElementById('grabify');
  
  console.log('containerBox元素:', containerBox ? '存在' : '不存在');
  console.log('grabify元素:', grabifyElement ? '存在' : '不存在');
  
  // 创建诊断面板
  function createDiagPanel() {
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '10px';
    panel.style.right = '10px';
    panel.style.backgroundColor = 'rgba(0,0,0,0.7)';
    panel.style.color = 'white';
    panel.style.padding = '10px';
    panel.style.borderRadius = '5px';
    panel.style.zIndex = '9999';
    panel.style.fontSize = '12px';
    panel.style.maxWidth = '400px';
    
    const content = document.createElement('pre');
    content.textContent = `URL: ${url}\nPath: ${path}\nNoteID: ${match2 ? match2[1] : 'none'}\nDOM: containerBox=${containerBox?'✓':'✗'}, grabify=${grabifyElement?'✓':'✗'}`;
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭';
    closeBtn.style.marginTop = '10px';
    closeBtn.onclick = function() { panel.remove(); };
    
    panel.appendChild(content);
    panel.appendChild(closeBtn);
    document.body.appendChild(panel);
  }
  
  // 运行诊断
  setTimeout(createDiagPanel, 2000);
})();
