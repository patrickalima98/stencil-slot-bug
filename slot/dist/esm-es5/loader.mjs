import { a as patchEsm, b as bootstrapLazy } from './core-740f5320.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["my-component", [[6, "my-component"]]]], options);
    });
};
export { defineCustomElements };
