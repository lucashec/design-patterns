import Item from "./item";

export default class Snack extends Item {
    constructor(description: string, price: number) {
        super("Snack", description, price);
    }    
} 