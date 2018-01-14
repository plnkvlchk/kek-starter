import * as services from '../../services';
import { ERROR_MESSAGES } from '../../constants';
import { reject, success } from '../';
import { isValidUUID } from '../../helpers/validators';

export async function getUserContributions(req, res) {
    try {
        const contributions = await services.getUserContributions(res.locals.user.id);

        return success(res, { contributions });
    } catch (error) {
        reject(res, ERROR_MESSAGES.CONTRIBUTIONS.GET_USER_CONTRIBUTIONS_ERROR);
    }
}

export async function getProjectContributions(req, res) {
    try {
        const { projectId } = req.params;

        if (!isValidUUID(projectId)) {
            return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { projectId });
        }

        const project = await services.getProject(projectId);
        if (!project) {
            return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST, { projectId });
        }

        const contributions = await services.getProjectContributions(projectId);

        return success(res, { contributions });
    } catch (error) {
        reject(res, ERROR_MESSAGES.CONTRIBUTIONS.GET_PROJECT_CONTRIBUTIONS_ERROR);
    }
}

export async function getAllContributions(req, res) {
    try {
        const contributions = await services.getAllContributions();

        return success(res, { contributions });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.CONTRIBUTIONS.GET_ALL_CONTRIBUTIONS_ERROR);
    }
}


