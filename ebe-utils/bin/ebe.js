#!/usr/bin/env node
process.title = 'ebe';
// Use magic to suppress node deprecation warnings
// See: https://github.com/nodejs/node/blob/master/lib/internal/process/warning.js#L77
// @ts-ignore
process.noDeprecation = '1';
require('../lib/node/cli');
