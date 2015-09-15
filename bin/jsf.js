#!/usr/bin/env node
"use strict";

// import * as fs from 'fs';
// import * as path from 'path';
// 
// import * as program from 'commander';

var fs = require('fs'),
	path = require('path'),
	program = require('commander');

let config = {
	compilerOptions: {
		target: "ES6",
		module: "commonjs"
	}	
};

program.command('jsf')
	.action(function() {
		let file = path.join(process.cwd(),'jsconfig.json')
		fs.writeFile(file,JSON.stringify(config));
	})

program.parse(process.argv);