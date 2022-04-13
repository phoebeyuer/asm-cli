const chalk = require('chalk');
const { templateList } = require('./config');

for (const key in templateList) {
  console.log(chalk.blueBright(`${alignRight(key, 15)}${templateList[key]}`));
}

/**
 * console 输出右边对齐
 * @param {String} key 原本的字符
 * @param {Number} num 输出的总长度
 */
function alignRight(key, num) {
  let space = " ".repeat(num - key.length);
  return key + space;
}