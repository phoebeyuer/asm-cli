// 基础模板列表
exports.templateList = {
  "cms": "后台管理系统",
  "web": "web门户等",
  "h5": "web版h5",
  "iscreen": "大屏+可视化",
  "micro": "微应用(qiankun)",
  "freestyle": "个性化模板",
  "uniapp": "小程序+h5"
}

/**
* console 输出右边对齐
* @param {String} key 原本的字符
* @param {Number} num 输出的总长度
*/
exports.alignRight = function (key, num) {
  let space = " ".repeat(num - key.length);
  return key + space;
 }