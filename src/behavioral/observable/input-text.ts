import Observable from "./observable";

export default class InputText extends Observable {
    value: string;
    constructor(readonly name: string) {
        super();
        this.value = ""
    }
    setValue(value: string) {
        this.value = value;
        this.notify(this.name, this.value); 
    }
}