'use strict';

var hoops = require('hoops');

function init (target) {
    var obj = {};
    var raw = target; //TODO https://www.npmjs.com/package/is-my-json-valid

    raw.forEach(function (prop) {
        var strPath = [
            prop.feature,
            prop.category,
            prop.property
        ].join('.');

        hoops.setIn(obj, strPath, {
            value: prop.value,
            sequence: prop.sequence
        });
    });

    return Object.freeze(obj);
}

module.exports = function (incoming) {
    return init(incoming);
};
