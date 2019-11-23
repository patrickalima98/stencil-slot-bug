import { r as registerInstance, h } from './core-740f5320.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.render = function () {
        return (h("div", null, h("slot", null), h("div", { class: 'end' }, h("slot", { name: 'end' }))));
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as my_component };
