import Account from "./account";
import CreditCommand from "./credit-command";
import DebitCommand from "./debit-command";

test('should create an account', () => {
    const account = new Account();
    expect(account.getBalance()).toBe(0);
});

test('should credit on account', () => {
    const account = new Account();
    const creditCommand = new CreditCommand(account, 250);
    creditCommand.execute();
    expect(account.getBalance()).toBe(250);
});

test('should debit on account', () => {
    const account = new Account();
    const creditCommand = new CreditCommand(account, 250);
    creditCommand.execute();
    const debitCommand = new DebitCommand(account, 50);
    debitCommand.execute();
    expect(account.getBalance()).toBe(200);
});