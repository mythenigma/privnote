addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  // 检查URL是否匹配/priv/{数字}格式
  const match = path.match(/^\/priv\/(\d+)$/)
  
  if (match) {
    // 找到匹配，执行重定向
    const noteId = match[1]
    return Response.redirect(`${url.origin}/view.html?note=${noteId}`, 302)
  }
  
  // 如果不匹配，继续正常请求
  return fetch(request)
}
