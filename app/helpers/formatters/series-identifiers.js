import { TABLES } from '../../constants/tables';

const columns = TABLES.SERIES_IDENTIFIERS.COLUMNS;

export function formatSeriesIdentifierForInsertion(rawSeriesIdentifier) {
    return {
        [columns.NAME]: rawSeriesIdentifier[columns.NAME],
        [columns.FACTORY_ID]: rawSeriesIdentifier[columns.FACTORY_ID]
    };
}
