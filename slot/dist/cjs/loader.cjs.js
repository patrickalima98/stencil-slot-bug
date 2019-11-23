'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ef87b0de.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["my-component.cjs",[[6,"my-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
