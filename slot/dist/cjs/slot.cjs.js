'use strict';

const core = require('./core-ef87b0de.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[6,"my-component"]]]], options);
});
