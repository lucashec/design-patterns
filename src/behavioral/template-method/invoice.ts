import Item from "./item";
import TaxItem from "./tax-item";

export default class Invoice {
    items: Item[];
    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTaxes() {
        let taxes = 0;
        for (const item of this.items) {
            if (item instanceof TaxItem) {
                taxes += item.getTax();
            }
        }
        return taxes;
    }
}  