# Privnote URL Routing Fix Guide

## Problem Description

The application was experiencing issues with URLs in the format `/priv/xxx/note` which were redirecting users back to the home page instead of displaying the note content. This was caused by several interconnected issues:

1. Incorrect script loading path calculation based on URL structure
2. Relative URL path problems in different URL depths
3. Cloudflare Pages routing configuration that needed optimization

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
