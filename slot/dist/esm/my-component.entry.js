import { r as registerInstance, h } from './core-740f5320.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("slot", null), h("div", { class: 'end' }, h("slot", { name: 'end' }))));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
