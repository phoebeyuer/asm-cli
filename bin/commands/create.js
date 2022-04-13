const { program } = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const symbols = require('log-symbols')

chalk.level = 1

program
	.usage('<project-name> [template-name][version]');

program.parse(process.argv);

// 没有输入参数时进行提示
if (program.args.length < 1) return program.help();

const projectName = program.args[1];

// 没有输入项目名称，提示后取消执行命令
if (!projectName) {
	console.log(chalk.redBright('\n project name does not exit!'));
	return;
}

console.log(chalk.greenBright('\n Start create... \n'));
const spinner = ora('Downloading...');
spinner.start();

// 下载模板代码
download(
	'phoebeyuer/leetcode-notes#main',
	`./${projectName}`,
	err => {
		if (err) {
			spinner.fail();
			console.log(chalk.redBright(symbols.error), chalk.redBright(`Create failed. ${err}`));
			return;
		}
		spinner.succeed();
		console.log(chalk.greenBright(symbols.success), chalk.greenBright(`Create success!`));
		console.log('\n To get started');
		console.log(` cd ${projectName} & npm install \n`);
	});


