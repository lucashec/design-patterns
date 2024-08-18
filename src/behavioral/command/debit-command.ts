import Account from "./account";
import Command from "./command";

export default class DebitCommand implements Command {
    constructor(readonly account: Account, readonly amount: number) {
    }
    execute(): void {
        this.account.debit(this.amount)
    }

}