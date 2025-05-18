# Debug Guide for Privnote

If you encounter issues with the Privnote application, here's a step-by-step guide to troubleshoot:

## Language Switching Issues

1. Open your browser developer console (F12 or Ctrl+Shift+I)
2. Look for error messages related to script loading or language switching
3. Check if the correct script path is being generated:
   - Root: `jsnopri08.js` 
   - Note URL (`/priv/xxx`): `../jsnopri08.js`
   - Note URL (`/priv/xxx/note`): `../../jsnopri08.js`

## Script Loading Issues

If the script fails to load:

1. Check browser network tab to see if `jsnopri08.js` request is failing
2. Try manually accessing the script URL directly in your browser
3. Make sure the file exists at the correct path on your server
4. Verify Cloudflare Pages is deploying the file correctly

## Fixing Path Issues

If you see path resolution issues in URLs:

1. Use absolute URLs instead of relative URLs for important resources
2. For the main script, use the code that calculates proper path depth
3. Consider adding a base tag in your HTML head to stabilize relative URLs

## Cloudflare Pages Configuration

If routing still doesn't work:

1. Make sure your `_redirects` file is in the root of your repository
2. Verify it contains both rules (specific /priv/* rule and generic /* rule)
3. Check Cloudflare Pages deployment logs for any error messages
4. Try clearing the Cloudflare cache and re-deploying

## Common Solutions

- **Page Reloads:** Make sure language switching never triggers page reloads
- **Script Loading:** Implement error handling for script loading failures
- **URL Structure:** Make sure all relative URLs are properly path-adjusted
- **Basic Functionality:** Implement a fallback UI system when script fails to load
