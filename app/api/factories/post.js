import {
    getFactoryByName,
    addFactory,
}  from '../../services';
import {
    TABLES,
    ERROR_MESSAGES,
} from '../../constants';
import { reject, success } from '../index';
import { isValidFactory } from '../../helpers/validators/factories';
import { formatFactoryForInsertion } from '../../helpers/formatters/factories';


export async function addNewFactory(req, res) {
    try {
        const factoryData = req.body;

        const factoryValidationInfo = isValidFactory(factoryData);
        if (factoryValidationInfo) {
            return reject(res, {factoryValidationInfo}, ERROR_MESSAGES.INVALID_FACTORY_DATA);
        }

        const isExist = await getFactoryByName(factoryData[TABLES.FACTORIES.COLUMNS.NAME]);
        if (isExist) {
            const existingFactory = {
                [TABLES.FACTORIES.COLUMNS.NAME]: factoryData[TABLES.FACTORIES.COLUMNS.NAME],
            };

            return reject(
                res,
                existingFactory,
                ERROR_MESSAGES.FACTORY_ALREADY_EXIST,
            );
        }

        const factory = await addFactory(formatFactoryForInsertion(factoryData));

        return success(res, { factory });
    } catch(error) {
        return reject(res, { error });
    }
}
