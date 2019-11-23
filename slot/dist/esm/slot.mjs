import { p as patchBrowser, b as bootstrapLazy } from './core-740f5320.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[6,"my-component"]]]], options);
});
