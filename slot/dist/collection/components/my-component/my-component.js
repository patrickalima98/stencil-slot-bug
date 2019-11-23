import { h } from "@stencil/core";
export class MyComponent {
    render() {
        return (h("div", null,
            h("slot", null),
            h("div", { class: 'end' },
                h("slot", { name: 'end' }))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
}
