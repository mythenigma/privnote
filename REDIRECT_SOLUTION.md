# Cloudflare Pages 重定向问题解决方案

## 问题描述

访问 `/priv/数字` 格式的URL（如 `https://privnote.chat/priv/2148508737`）时，页面没有正确重定向到 `view.html?note=数字`，而是显示首页内容。

## 解决策略

我们已经实施了多种解决方案，共同确保URL重定向能够正常工作：

### 1. 更新 `_redirects` 文件

我们使用了Cloudflare Pages支持的`:placeholder`语法替代了正则表达式，并添加了多种匹配规则来确保覆盖所有情况：

```
/priv/:id /view.html?note=:id 302
/priv/:id/ /view.html?note=:id 302
/priv/:id /redirect.html 200
```

### 2. 添加了 `_headers` 文件中的重定向规则

```
[[redirects]]
  from = "/priv/:id"
  to = "/view.html?note=:id"
  status = 302
```

### 3. 添加了JavaScript备用方案

在`index.html`头部添加了立即执行的JavaScript代码，确保即使其他重定向失败，也能通过JavaScript进行重定向。

### 4. 创建了专用的重定向页面

添加了`redirect.html`作为备用方案，当URL匹配`/priv/数字`格式时，将通过这个页面完成重定向。

### 5. 提供了Cloudflare Worker配置

创建了`wrangler.toml`和`redirect-handler.js`，可通过Cloudflare Worker实现可靠的重定向。

## 部署检查清单

上传新版本到Cloudflare Pages时，请确保：

1. ✅ 上传所有新创建和修改的文件
2. ✅ 清除Cloudflare缓存（在Cloudflare控制面板中进行）
3. ✅ 测试不同格式的URL：
   - `https://privnote.chat/priv/2148508737`
   - `https://privnote.chat/priv/2148508737/`

## 如果仍然无法解决

如果上述方法仍无法解决重定向问题，请考虑：

1. 在Cloudflare Pages控制面板中检查是否有自定义域名设置问题
2. 检查是否有Cloudflare Page Rules或其他规则干扰重定向
3. 联系Cloudflare支持，提供您的站点配置和重定向问题描述

## 临时修复方法

如果无法立即解决重定向问题，可以考虑让用户使用替代URL：
`https://privnote.chat/view.html?note=2148508737`
