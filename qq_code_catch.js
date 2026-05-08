// Quantumult X 拦截访问 + 提取Code
!(async () => {
  const url = $request.url;
  // 提取code
  const m = url.match(/code=([^&]+)/);
  if (m) {
    let code = m[1];
    $notify("已拦截并提取Code","",code);
    console.log("拦截URL：" + url);
    console.log("提取Code：" + code);
  }
  // 强制拒绝连接，浏览器打不开
  $done({
    response: {
      status: 403,
      body: "已被圈X拦截"
    }
  });
})();