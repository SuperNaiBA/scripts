// 提取code + 强制重定向到127.0.0.1 禁止访问
!(async () => {
    const url = $request.url;

    // 提取URL中的code参数
    const codeReg = /code=([^&]+)/;
    const codeRes = url.match(codeReg);
    if (codeRes && codeRes[1]) {
        const code = codeRes[1];
        $notify("已拦截重定向", "提取Code成功", code);
        console.log("拦截链接：" + url);
        console.log("获取Code：" + code);
    }

    // 强制重定向到本地127.0.0.1，彻底无法访问
    $done({
        redirect: "http://127.0.0.1"
    });
})();