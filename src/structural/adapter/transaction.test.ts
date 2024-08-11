import { ApplePayTransaction } from "./apple-pay-transaction";
import { ApplyPayTransactionAdapter } from "./apple-pay-transaction-adapter";
import { PayPalTransactionAdapter } from "./pay-pay-transaction-adapter";
import { PayPalTransaction } from "./paypal-transaction"

test('should create a transaction with PayPal', () => {
    const gatewayTransaction = new PayPalTransaction(47561346, 1000, "C");
    const transaction = new PayPalTransactionAdapter(gatewayTransaction);
    expect(transaction.totalAmount).toBe(1000);
    expect(transaction.status).toBe('approved');
    expect(transaction.trackNumber).toBe("47561346");
})

test('should create a transaction with Apple Pay', () => {
    const gatewayTransaction = new ApplePayTransaction("ACKG4359YB", 1000, 2);
    const transaction = new ApplyPayTransactionAdapter(gatewayTransaction);
    expect(transaction.totalAmount).toBe(1000);
    expect(transaction.status).toBe('approved');
    expect(transaction.trackNumber).toBe("ACKG4359YB");
})