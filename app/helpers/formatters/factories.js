import { TABLES } from '../../constants/tables';

const columns = TABLES.FACTORIES.COLUMNS;

export function formatFactoryForInsertion(rawFactory) {
    return {
        [columns.NAME]: rawFactory[columns.NAME],
    };
}
