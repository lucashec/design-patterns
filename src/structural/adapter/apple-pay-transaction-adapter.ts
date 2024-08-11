import { ApplePayTransaction } from "./apple-pay-transaction";
import { Transaction } from "./transaction";

export class ApplyPayTransactionAdapter implements Transaction {
    trackNumber: string;
    totalAmount: number;
    status: string;
    constructor(gatewayTransaction: ApplePayTransaction) {
        this.trackNumber = gatewayTransaction.code;
        this.totalAmount = gatewayTransaction.grossAmount;
        this.status = this.convertStatus(gatewayTransaction.situation);
    }

    convertStatus(situation: number) {
        const map: any = {
            1: 'payment_pending',
            2: 'approved',
            3: 'rejected',
        }
        return map[situation];
    }
}