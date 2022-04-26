const chalk = require('chalk');
const { templateList, alignRight } = require('../config/config');

for (const key in templateList) {
  console.log(chalk.blueBright(`${alignRight(key, 15)}${templateList[key]}`));
}