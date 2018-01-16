import * as services from '../../services';
import { reject, success } from '../';
import { ERROR_MESSAGES, TABLES } from '../../constants';
import { isValidUUID, isAndroidDonationValid } from '../../helpers/validators';
import { isFinite } from 'lodash';

export async function donate(req, res) {
    try {
        const { projectId } = req.params;

        if (!isValidUUID(projectId)) {
            return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { projectId });
        }

        const project = await services.getProject(projectId);
        if (!project) {
            return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST, { projectId });
        }

        if (!isFinite(req.body[TABLES.CONTRIBUTIONS.COLUMNS.SUM])) {
            return reject(res, ERROR_MESSAGES.VALIDATION.SHOULD_BE_NUMBER);
        }

        const contribution = await services.donateToProject({
            [TABLES.CONTRIBUTIONS.COLUMNS.USER_ID]: res.locals.user.id,
            [TABLES.CONTRIBUTIONS.COLUMNS.PROJECT_ID]: projectId,
            [TABLES.CONTRIBUTIONS.COLUMNS.SUM]: req.body[TABLES.CONTRIBUTIONS.COLUMNS.SUM]
        });

        await services.addDonationSumToProject(projectId, req.body[TABLES.CONTRIBUTIONS.COLUMNS.SUM]);

        return success(res, { contribution });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.CONTRIBUTIONS.ADD_CONTRIBUTION_ERROR);
    }
}

export async function androidDonate(req, res) {
    try {
        const data = req.body;

        const donateValidationInfo = isAndroidDonationValid(req.body);
        if (donateValidationInfo) {
            return reject(res, ERROR_MESSAGES.CONTRIBUTIONS.INVALID_CONTRIBUTION_DATA, { donateValidationInfo });
        }

        const project = await services.getProject(data['project_id']);
        if (!project) {
            return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST);
        }

        const contribution = await services.donateToProject({
            [TABLES.CONTRIBUTIONS.COLUMNS.USER_ID]: res.locals.user.id,
            [TABLES.CONTRIBUTIONS.COLUMNS.PROJECT_ID]: data['project_id'],
            [TABLES.CONTRIBUTIONS.COLUMNS.SUM]: req.body['pledge']
        });

        await services.addDonationSumToProject(data['project_id'], req.body['pledge']);

        return success(res, { contribution });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.CONTRIBUTIONS.ADD_CONTRIBUTION_ERROR, { error });
    }
}
