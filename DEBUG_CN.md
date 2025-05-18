## Privnote 故障排除指南

如果您在使用 Privnote 网站时遇到问题，请按照以下步骤进行故障排除：

### 1. 脚本加载问题

如果页面功能不正常，首先检查脚本是否正确加载：

1. 打开浏览器开发者工具（按 F12 或 Ctrl+Shift+I）
2. 转到 Network/网络 选项卡
3. 刷新页面
4. 查找 `jsnopri08.js` 文件是否成功加载
5. 如果显示 404 错误，这表明脚本路径计算可能有问题

### 2. 语言切换问题

如果语言切换不正常：

1. 检查 localStorage 中是否正确保存了语言偏好
   ```javascript
   localStorage.getItem('selectedLanguage')
   ```
2. 确保 `applyLanguage` 函数正确执行
3. 检查控制台是否有相关错误信息

### 3. 笔记阅读问题

如果在 `/priv/xxx/note` 页面有问题：

1. 检查 URL 是否正确
2. 验证 _redirects 文件是否正确配置
3. 确保路径计算逻辑能够处理不同的 URL 深度

### 4. Cloudflare Pages 配置

确保 Cloudflare Pages 配置正确：

1. _redirects 文件必须位于项目根目录
2. 验证部署日志是否显示了正确的路由规则
3. 可能需要清除 Cloudflare 的缓存

### 5. 简单解决方案

如果仍有问题，可以尝试以下简单解决方案：

1. 使用绝对路径而不是相对路径加载脚本：
   ```html
   <script src="https://privnote.chat/jsnopri08.js"></script>
   ```
2. 添加 <base> 标签在 HTML 头部：
   ```html
   <base href="https://privnote.chat/">
   ```
3. 清除浏览器缓存后重试
