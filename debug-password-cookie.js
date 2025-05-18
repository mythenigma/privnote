// 密码验证测试脚本
// 用于测试密码验证功能并显示详细日志

(function() {
  console.log('===== 密码验证和内容显示测试 =====');
  console.log('当前cookie:', document.cookie);
  
  // 清除当前cookie进行测试
  document.cookie = "myth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  console.log('清除cookie后:', document.cookie);
  
  // 模拟设置密码cookie
  const expires = new Date(Date.now() + 700000).toUTCString();
  document.cookie = "myth=ok; expires=" + expires + "; path=/; SameSite=Lax";
  console.log('设置cookie后:', document.cookie);
  
  // 测试跨域请求
  async function testCrossDomainRequest() {
    console.log('测试跨域请求和cookie传递...');
    
    const testData = new FormData();
    testData.append('e', '123456789'); // 测试ID
    testData.append('test', 'cookie_test');
    
    try {
      console.log('发送请求到远程服务器...');
      const response = await fetch('https://maipdf.com/baidu.php', {
        method: 'POST',
        body: testData,
        credentials: 'include'
      });
      
      const result = await response.text();
      console.log('服务器响应:', result);
      
      // 检查是否有错误代码
      if (result.startsWith('18') || result.startsWith('19')) {
        console.error('服务器返回认证错误:', result);
        console.log('可能的原因:');
        console.log('1. Cookie未正确发送');
        console.log('2. Cookie格式不正确');
        console.log('3. CORS设置问题');
      } else {
        console.log('请求成功, cookie可能被正确处理');
      }
    } catch (error) {
      console.error('请求出错:', error);
    }
  }
  
  // 运行测试
  testCrossDomainRequest();
  
  // 显示cookie检查函数的结果
  function checkMythCookie() {
    const hasMythCookie = document.cookie.split(';').some(item => {
      const cookieStr = item.trim();
      return cookieStr.startsWith('myth=ok') || cookieStr.startsWith('myth=12345');
    });
    
    console.log('Cookie检查结果:', hasMythCookie ? '有效' : '无效');
  }
  
  setTimeout(checkMythCookie, 1000);
})();
