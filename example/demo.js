'use strict';

var path = require('path');
var constantly = require('../index.js');
var gutil = require('gulp-util');

var $C = constantly(require(path.resolve('example/example.json'))); //succeeds, JSON from a file

//var $C = constantly('example/example.json'); //fails, just a string which is a valid path but expects JSON

//var $C = constantly([{ //succeeds, pass it json
//    "feature": "ACCOUNT",
//    "category": "TYPE",
//    "property": "USER",
//    "comment": "A regular user that can login and do normal things",
//    "value": "USER",
//    "sequence": 0
//},
//{
//    "feature": "ACCOUNT",
//    "category": "TYPE",
//    "property": "ADMIN",
//    "comment": "User which is an administrator",
//    "value": "ADMIN",
//    "sequence": 0
//}]);

for (var f in $C) {
    gutil.log(gutil.colors.cyan(f));
    for (var c in $C[f]) {
        gutil.log('  ', gutil.colors.yellow(c));
        for (var p in $C[f][c]) {
            gutil.log('    ', gutil.colors.green(p), ' ', gutil.colors.magenta($C[f][c][p].value));
        }
    }
}

var proposedAccountType = 'ADMIN';

switch(proposedAccountType) {
case $C.ACCOUNT.TYPE.USER.value:
    gutil.log('is regular user');
break;

case $C.ACCOUNT.TYPE.ADMIN.value:
    gutil.log('is admin');
break;
default:
    gutil.log('unknown user type');
break;
}
