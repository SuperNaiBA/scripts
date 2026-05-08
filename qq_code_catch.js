// 提取Code + 重定向禁止访问
!(async () => {
  const url = $request.url;
  // 提取code
  const codeMatch = url.match(/code=([^&]+)/);
  if (codeMatch && codeMatch[1]) {
    const code = codeMatch[1];
    $notify("✅ 已拦截并重定向", "提取到Code", code);
    console.log("拦截URL：", url);
    console.log("Code：", code);
  }

  // 核心：重定向到空白页，浏览器无法访问原链接
  $done({
    redirect: "about:blank"
  });
})();