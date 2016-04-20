/**
 * Created by wert on 20.04.16.
 */

'use strict';

/** Some helpers for friendly type detection */
const Types = {
    isArray: function(smth){
        return Array.isArray(smth);
    },
    isNotEmptyArray: function(smth){
        return Array.isArray(smth) && smth && smth.length && smth.length > 0;
    },
    isDefined: function(smth) {
        return typeof smth !== 'undefined';
    },
    isUndefined: function(smth) {
        return typeof smth === 'undefined';
    },
    isObject: function(smth) {
        return typeof smth === 'object';
    },
    isJSONObject: function (smth) {
        return typeof smth === 'object' && !Array.isArray(smth);
    },
    isFunction: function(smth) {
        return typeof smth === 'function';
    }
};


module.exports = Types;