import Beer from "./beer";
import Invoice from "./invoice";
import Snack from "./snack";
import Whisky from "./whisky";

test('should create an invoice', () => {
    const invoice = new Invoice();
    invoice.addItem(new Beer("Stella Artois", 10));
    invoice.addItem(new Whisky("Buffalo Trace", 120));
    invoice.addItem(new Snack("Pringles", 12));
    const taxes = invoice.getTaxes();
    expect(taxes).toBe(25);
}); 