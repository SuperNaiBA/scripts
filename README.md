# QQ Request Block

Quantumult X 重写脚本

## 功能

- 拦截 QQ 请求
- 提取 code
- 通知显示
- 阻止请求发送

## 配置

```conf
[rewrite_local]
^https:\/\/gate-obt\.nqf\.qq\.com\/prod\/ws\?.*code=.* url script-request-body https://raw.githubusercontent.com/用户名/仓库/main/qq_block.js

[mitm]
hostname = gate-obt.nqf.qq.com