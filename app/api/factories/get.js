import { getAllFactories as getAllFactoriesService } from '../../services/factories';
import { reject, success} from '../index';

export async function getAllFactories(req, res) {
    try {
        const factories = await getAllFactoriesService();

        return success(res, { factories });
    } catch (error) {
        return reject(res, { error });
    }
}
