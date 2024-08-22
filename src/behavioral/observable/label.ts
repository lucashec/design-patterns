import Observer from "./observer";

export default class Label implements Observer {
    value: string;
    constructor(readonly expression: string) {
        this.value = "";
    }
    update(name: string, value: string): void {
        this.setValue(name, value);
    }
    setValue (name: string, value: string) {
        this.value = this.expression.replace(`{{${name}}}`, value);
    }
    get Value() {
        return this.value;
    }
}