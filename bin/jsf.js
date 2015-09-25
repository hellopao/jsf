#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

let config = {
	compilerOptions: {
		target: "ES6",
		module: "commonjs"
	}	
};

let file = path.join(process.cwd(),'jsconfig.json');

fs.writeFile(file,JSON.stringify(config));