import { TABLES } from '../../constants';

const columns = TABLES.PAYMENT_CREDENTIALS.COLUMNS;

export function formatPaymentCredentials(rawPaymentCredentials) {
    return {
        [columns.NUMBER]: rawPaymentCredentials[columns.NUMBER],
        [columns.KEEPER]: rawPaymentCredentials[columns.KEEPER],
        [columns.USER_ID]: rawPaymentCredentials[columns.USER_ID],
        [columns.EXPIRATION_DATE]: rawPaymentCredentials[columns.EXPIRATION_DATE],
        [columns.CVC]: rawPaymentCredentials[columns.CVC],
    }
}
