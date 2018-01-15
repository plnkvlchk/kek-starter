import { oneOrNone } from '../db';
import { getInsertPaymentCredentialsQuery } from '../sql-queries';

export function insertPaymentCredentials(paymentCredentials) {
    return oneOrNone(getInsertPaymentCredentialsQuery(paymentCredentials));
}
