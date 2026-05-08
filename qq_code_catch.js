/*
项目名称：QQ Code 提取
功能：提取 URL 中的 code 参数
适用：Quantumult X
作者：你的名字
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
            "QQ Code 提取成功",
            "已获取 code",
            code
        );

        // 持久化保存
        $prefs.setValueForKey(code, "qq_code");
    } else {
        console.log("未找到 code 参数");
    }
} catch (e) {
    console.log("解析失败: " + e);
}

$done({});