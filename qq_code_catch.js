/*
功能：
1. 拦截 QQ 请求
2. 提取 code
3. 通知显示
4. 阻止请求继续发送
*/

const url = $request.url;

try {
    const match = url.match(/[?&]code=([^&]+)/);

    if (match && match[1]) {
        const code = decodeURIComponent(match[1]);

        console.log("========== QQ CODE ==========");
        console.log(code);
        console.log("=============================");

        $notify(
            "QQ 请求已拦截",
            "成功获取 code",
            code
        );
    } else {
        console.log("未找到 code");
    }

} catch (e) {
    console.log("解析失败: " + e);
}

// 阻止请求
$done({
    status: "HTTP/1.1 404 Not Found",
    body: ""
});