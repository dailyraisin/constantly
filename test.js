'use strict';

var path = require('path');
var constantly = require('./index.js');
var gutil = require('gulp-util');

var $C = constantly(path.resolve('example.json'));

for (var f in $C) {
    gutil.log(gutil.colors.cyan(f));
    for (var c in $C[f]) {
        gutil.log('  ', gutil.colors.yellow(c));
        for (var p in $C[f][c]) {
            gutil.log('    ', gutil.colors.green(p), ' ', gutil.colors.magenta($C[f][c][p].value));
        }
    }
}
