# SuperNaiBA's Quantumult X Scripts

## 🎯 脚本说明
### qq_code_catch.js
- 功能：捕获 `gate-obt.nqf.qq.com` 请求，提取 `code` 参数并拦截请求
- 通知：成功提取时会弹窗显示 code，同时写入圈X日志
- 圈X配置：
  ```ini
  [MITM]
  hostname = gate-obt.nqf.qq.com

  [rewrite_local]
  ^https://gate-obt\.nqf\.qq\.com/prod/ws url script-request-header https://raw.githubusercontent.com/SuperNaiBA/scripts/main/qq_code_catch.js