import Account from "./account";
import Command from "./command";

export default class CreditCommand implements Command {
    constructor(readonly account: Account, readonly amount: number) {
    }
    execute(): void {
        this.account.credit(this.amount)
    }

}