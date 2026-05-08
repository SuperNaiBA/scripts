/*
功能：
1. 拦截请求
2. 提取 code
3. 点击通知自动复制
4. 阻止请求发送
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
            "点击通知自动复制 code",
            code,
            {
                "update-pasteboard": code
            }
        );
    }

} catch (e) {

    console.log("解析失败: " + e);

}

// 阻止请求继续发送
$done({
    status: "HTTP/1.1 404 Not Found",
    body: ""
});