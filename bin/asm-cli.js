#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
	.version('0.1.0')
	.option('-i, init [name]', '初始化项目')
	.parse(process.argv);

if (program.init) {
	const spinner = ora('正在下载代码').start();
	download('code-device/x-build', program.init, function(err) {
		if (!err) {
			console.info(chalk.blueBright('下载完毕'));
		} else {
			console.info(chalk.redBright('下载错误'));
		}
	})
}
