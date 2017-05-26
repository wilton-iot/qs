define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

var stringify = require('qs/lib/stringify');
var parse = require('qs/lib/parse');
var formats = require('qs/lib/formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

return module.exports;});
