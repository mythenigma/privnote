# Privnote URL Routing Fix Guide

## Problem Description

The application was experiencing issues with URLs in the format `/priv/xxx/note` which were redirecting users back to the home page instead of displaying the note content. This was caused by several interconnected issues:

1. Incorrect script loading path calculation based on URL structure
2. Relative URL path problems in different URL depths
3. Cloudflare Pages routing configuration that needed optimization
4. Password-protected notes not displaying content after correct password entry

## Solutions Implemented

### 1. Script Loading Path Fix

The script path calculation in `index.html` was modified to always use absolute paths instead of relative paths:

```javascript
// OLD CODE (problematic):
if (path.includes('/priv/')) {
    var segments = path.split('/').filter(Boolean);
    var depth = segments.length;
    
    if (depth === 1) { // /priv/
        scriptPath = 'jsnopri08.js';
    } else if (depth === 2) { // /priv/xxx
        scriptPath = '../jsnopri08.js';
    } else { // /priv/xxx/note 或更深
        scriptPath = '../../jsnopri08.js';
    }
} else {
    // 首页或其他页面
    scriptPath = 'jsnopri08.js';
}

// NEW CODE (fixed):
if (path.includes('/priv/')) {
    // 直接使用绝对路径，避免相对路径计算问题
    scriptPath = '/jsnopri08.js';
} else {
    // 首页或其他页面
    scriptPath = '/jsnopri08.js';
}
```

### 2. Base Tag Addition

Added a `<base>` tag to the HTML head to stabilize all relative URLs:

```html
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <title>Privnote - Encrypts your notes with links, zero-width characters, or binary</title>
    <base href="https://privnote.chat/">
    <!-- other tags -->
</head>
```

### 3. URL Routing Configuration in Cloudflare Pages

The `_redirects` file was updated to use the `200!` status code to strictly preserve original URLs:

```
# 笔记详情页面 - 保持原始URL
/priv/*/note    /index.html   200!

# 笔记页面 - 保持原始URL
/priv/*         /index.html   200!

# 所有其他路径 - 保持原始URL
/*              /index.html   200!
```

The `200!` status code ensures that the URL in the browser address bar remains unchanged while serving the content of `index.html`.

### 4. Password Verification Flow Enhancement

The `yanzheng()` function was improved to reliably extract note IDs directly from the URL:

```javascript
function yanzheng(){
  console.log('开始验证密码...');
  pass2 = document.getElementById('mythenigma');
  var expires = new Date(Date.now() + 700000).toUTCString();
  
  if(pass1 == pass2.value){
    console.log('密码验证成功!');
    document.cookie = "myth=ok; expires=" + expires;
    
    // 清除密码输入界面并显示加载状态
    const containerBox = document.getElementById('containerbox');
    if (containerBox) {
      containerBox.innerHTML = '<div class="text-center my-5"><div class="spinner-border text-primary" role="status"></div><p class="mt-3">Loading content, please wait...</p></div>';
    }
    
    // 从URL提取笔记ID - 关键改进点
    const url = window.location.href;
    const regex = /priv\/([^\/]+)(?:\/note)?/;
    const match = url.match(regex);
    if (match !== null) {
      textareaValue = match[1];
      
      // 确保ID被正确设置后再调用tocontent
      setTimeout(function() {
        tocontent();
      }, 300);
    } else {
      // 错误处理
      console.error('无法从URL提取笔记ID');
      if (containerBox) {
        containerBox.innerHTML = '<div class="alert alert-danger">Could not identify the note ID, please check the URL format.</div>';
      }
    }
  } else {
    // 密码不正确的处理...
  }
}
```

### 5. Content Display Enhancement

The `tocontent()` function was enhanced to be more robust in handling content:

```javascript
async function tocontent(){
  console.log('开始显示内容，ID:', textareaValue);
  
  try {
    // 处理过期时间逻辑...
    
    // 优化内容获取逻辑，仅在必要时发送请求
    if(!textareaValue || textareaValue.length < 10 || textareaValue.includes('/')) {
      // 只在 textareaValue 看起来像 ID 而不是内容时获取内容
      // API 请求代码...
    }
    
    // 创建和显示内容区域
    const buttcontent = document.getElementById('containerbox');
    buttcontent.innerHTML = '...'; // 内容区域 HTML
    
    // 将内容填充到文本区域
    const textarea = document.getElementById('resultarea');
    textarea.value = textareaValue;
  } catch (error) {
    console.error('处理内容时出错:', error);
    // 错误处理...
  }
}
```

### 6. Fallback Mechanism

The fallback script (`jsnopri08-fallback.js`) was enhanced to provide better diagnostics and recovery options:

```javascript
// 从URL提取笔记ID
function extractNoteId() {
  const url = window.location.href;
  const regex = /priv\/([^\/]+)(?:\/note)?/;
  const match = url.match(regex);
  if (match !== null) {
    return match[1];
  }
  return null;
}

// 显示错误消息和恢复选项
function showErrorMessage() {
  const noteId = extractNoteId();
  const containerBox = document.getElementById('containerbox');
  
  if (containerBox) {
    // 双语错误消息，含备用链接和刷新按钮
    let message = '...'; // 详细的错误和恢复信息
    containerBox.innerHTML = message;
  }
}
```

## Testing

To verify the fixes work correctly:

1. Test with URL format: `/priv/xxx`
2. Test with URL format: `/priv/xxx/note`
3. Test password-protected notes with both URL formats
4. Test language switching functionality in both regular and password-protected notes

## Troubleshooting Remaining Issues

If issues persist:

1. Check browser console for JavaScript errors
2. Verify that Cloudflare Pages is properly applying the `_redirects` rules
3. Test script loading with Network tab in Developer Tools
4. Ensure all relative links in the application use the correct base path

## Contact

For persistent issues, please contact the development team at joe@pdfhost.online.
    <meta charset="UTF-8">
    <title>Privnote - Encrypts your notes with links, zero-width characters, or binary</title>
    <base href="https://privnote.chat/">
    <!-- Other meta tags -->
</head>
```

### 3. Enhanced Cloudflare Pages Routing

The `_redirects` file was updated to better handle the routing priority:

```
# More explicit /priv/xxx/note route first
/priv/*/note    /index.html   200

# Then the more general /priv/xxx route
/priv/*         /index.html   200

# Finally the catchall route
/*              /index.html   200
```

### 4. Password Verification Logic Improvement

The `yanzheng()` function was updated to extract the note ID from the current URL to ensure consistency across all URL formats:

```javascript
// 确保URL保持在当前路径，而不是重定向
// 从URL中提取笔记ID
const url = window.location.href;
const regex = /priv\/([^\/]+)(?:\/note)?/;
const match = url.match(regex);
if (match !== null) {
  // 存储笔记ID以供tocontent()使用
  textareaValue = match[1];
}
```

## Testing

To verify these fixes, test the following scenarios:

1. Test opening a note with a URL in the format: `https://privnote.chat/priv/123456789/note`
2. Test opening a note with a URL in the format: `https://privnote.chat/priv/123456789`
3. Test a password-protected note with both URL formats
4. Test language switching while viewing a note or entering a password

## Potential Remaining Issues

If problems persist, check:

1. Browser console errors related to script loading
2. Network requests to verify the script is being loaded correctly
3. Cloudflare Pages caching - you may need to purge the cache or use a hard refresh
4. Cookie storage and handling, especially for password verification
