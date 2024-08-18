import Item from "./item";

export default abstract class TaxItem extends Item {
    abstract getTax(): number;
}