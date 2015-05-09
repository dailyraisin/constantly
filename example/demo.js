'use strict';

var path = require('path');
var constantly = require('../index.js');
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

var proposedAccountType = $C.ACCOUNT.TYPE.ADMIN.value;

switch(proposedAccountType) {
case $C.ACCOUNT.TYPE.USER.value:
    gutil.log('is regular user');
break;

case $C.ACCOUNT.TYPE.ADMIN.value:
    gutil.log('is admin');
break;
}
