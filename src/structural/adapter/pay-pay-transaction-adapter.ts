import { PayPalTransaction } from "./paypal-transaction";
import { Transaction } from "./transaction";

export class PayPalTransactionAdapter implements Transaction {
    trackNumber: string;
    totalAmount: number;
    status: string;
    constructor(gatewayTransaction: PayPalTransaction) {
        this.trackNumber = gatewayTransaction.id.toString();
        this.totalAmount = gatewayTransaction.amount;
        this.status = this.convertStatus(gatewayTransaction.status);
    }

    convertStatus(situation: string) {
        const map: any = {
            "P": 'payment_pending',
            "C": 'approved',
            "F": 'rejected',
        }
        return map[situation];
    }
}