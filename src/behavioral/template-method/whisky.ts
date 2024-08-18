import TaxItem from "./tax-item";

export default class Whisky extends TaxItem {
    constructor(description: string, price: number) {
        super("Whisky", description, price);
    }
    getTax(): number {
        return (this.price * 20) / 100;
    }
}