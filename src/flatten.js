/**
 * Created by wert on 20.04.16.
 */

const Types = require('./types');

/** Return array of array keys: [0, 1, 2, ...] etc */
function arrayKeys(arr) {
    const keyz = [];
    for(let i = 0, len = arr.length; i < len; i++){
        keyz.push[i];
    }
    return keyz;
}

function flatten(obj){
    const result = {};

    function step(object, pathPrefix) {
        const keys = Array.isArray(object) ? arrayKeys(object) : Object.keys(object);           // keys will be object keys or array indexes (string vs. int)
        for(let i = 0, len = keys.length; i < len; i++) {                                       // looping through all keys on this level
            const   key         = keys[i],
                    value       = object[key],
                    thatPath    = pathPrefix.concat([key]),
                    isJsonObj   = Types.isJSONObject(value),
                    isArray     = Types.isArray(value);

            switch (true) {
                case isJsonObj:
                    step(value, thatPath);
                    break;
                case isArray:
                    step(value, thatPath);
                    break;
                default:
                    result[thatPath] = object[key];
                    break;
            }
        }
    }
    step(obj, []);
    return result;
}


module.exports = flatten;