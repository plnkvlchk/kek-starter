import { TABLES } from '../../constants';

const columns = TABLES.CONTRIBUTIONS.COLUMNS;

export function formatAndroidDonation(rawDonation) {
    return {
        [columns.PROJECT_ID]: rawDonation[columns.PROJECT_ID],
        [columns.SUM]: rawDonation['pledge'],
        [columns.USER_ID]: rawDonation[columns.USER_ID],
    };
}
