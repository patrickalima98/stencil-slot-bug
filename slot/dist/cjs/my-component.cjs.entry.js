'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ef87b0de.js');

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", null, core.h("slot", null), core.h("div", { class: 'end' }, core.h("slot", { name: 'end' }))));
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
