#!/usr/bin/env node

var trim = require('./')
var fs = require('fs')
var ldj = require('ldjson-stream')

process.stdin.pipe(ldj.parse()).pipe(trim()).pipe(ldj.serialize()).pipe(process.stdout)
