#!/usr/bin/env node
"use strict";

var fs = require('fs'),
	path = require('path');

var config = `{
	"compilerOptions": {
		"target": "es2015",
		"module": "commonjs"
	}	
}`;

var file = path.join(process.cwd(),'jsconfig.json');

fs.writeFile(file,config);