import { success, reject } from '../';
import * as services from '../../services';
import { ERROR_MESSAGES } from '../../constants';
import { isValidUUID } from '../../helpers/validators';

export async function deleteProject(req, res) {
    try {
        const { projectId } = req.params;

        if (!isValidUUID(projectId)) {
            return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { projectId });
        }

        const project = await services.getProject(projectId);
        if (!project) {
            return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST, { projectId });
        }

        await services.deleteProjectContributions(projectId);
        const projectDeleted = await services.deleteProject(projectId);

        return success(res, { projectDeleted });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.PROJECTS.DELETE_PROJECT_ERROR);
    }
}
