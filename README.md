# OneClickEvaluate
南开大学eamis系统一键评教脚本

## 如何使用

- 打开https://eamis.nankai.edu.cn/
- 登录后等待跳转
- 手动把学期设置为当前需要评教的学期
- Chrome浏览器按F12键，然后选择Console
- 复制`click.js`中的内容到Console，然后回车
- 等待执行完毕（评一门课大概需要5s以内）

## 已知问题

- 如果网速比较慢需要把`sleep()`的参数手动放大
