#! /usr/bin/env node

const { program } = require('commander');

program
	.command('create')
	.description('create project from template')
	.action(async () => {
		require('./commands/create');
	});

program.parse(process.argv);
