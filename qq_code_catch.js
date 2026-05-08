// qq_code_catch.js
// 功能：捕获 gate-obt.nqf.qq.com 请求，提取 code 参数并拦截请求
!(async () => {
    const url = $request.url;
    // 正则精准提取 code
    const reg = /code=([^&]+)/;
    const matchRes = url.match(reg);

    if (matchRes && matchRes[1]) {
        const code = matchRes[1];
        // 系统通知
        $notify("Code 提取成功", "gate-obt.nqf.qq.com", code);
        // 日志输出
        console.log("【捕获到 Code】");
        console.log("URL:", url);
        console.log("Code:", code);
    } else {
        console.log("未匹配到 Code 参数");
    }

    // 拦截本次请求
    $done({ cancel: true });
})();