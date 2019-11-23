import { a as patchEsm, b as bootstrapLazy } from './core-740f5320.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[6,"my-component"]]]], options);
  });
};

export { defineCustomElements };
