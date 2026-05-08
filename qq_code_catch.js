// 拦截域名劫持 + 提取code 重定向到127.0.0.1
!(async () => {
    const url = $request.url;
    // 提取code参数
    const codeReg = /code=([^&]+)/;
    const match = url.match(codeReg);

    if (match && match[1]) {
        const code = match[1];
        $notify("✅ 已捕获Code", "gate-obt.nqf.qq.com", code);
        console.log("捕获链接：" + url);
        console.log("提取Code：" + code);
    }

    // 强制重定向本地，双重拦截
    $done({ redirect: "http://127.0.0.1" });
})();