export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      
      // 获取静态资源
      if (url.pathname.startsWith('/images/')) {
        // 处理图片请求
        const asset = await env.ASSETS.fetch(request);
        return asset;
      }
      
      // 处理主页请求
      if (url.pathname === '/' || url.pathname === '/index.html') {
        const asset = await env.ASSETS.fetch(new Request('index.html', request));
        return asset;
      }
      
      // 处理CSS和JS请求
      if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
        const asset = await env.ASSETS.fetch(request);
        return asset;
      }
      
      // 未找到资源时返回404
      return new Response('Not Found', { status: 404 });
    }
  };