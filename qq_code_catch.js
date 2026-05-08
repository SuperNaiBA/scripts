// Quantumult X 先拦截请求 再提取url中的code
!(async () => {
  // 1. 先提取 URL 中的 code
  const url = $request.url;
  const reg = /code=([^&]+)/;
  const result = url.match(reg);

  if (result && result[1]) {
    const code = result[1];
    // 弹窗通知
    $notify("捕获Code成功", "已拦截请求", code);
    // 日志打印
    console.log("===== 拦截成功 =====");
    console.log("完整链接：", url);
    console.log("提取Code：", code);
  } else {
    console.log("未匹配到 code 参数");
  }

  // 2. 直接拦截请求 拒绝放行
  $done({ cancel: true });
})();