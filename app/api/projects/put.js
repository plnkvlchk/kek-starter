import { reject, success } from '../';
import * as services from '../../services';
import { ERROR_MESSAGES } from '../../constants';
import { isValidUUID, isValidProjectForUpdate } from '../../helpers/validators';
import { formatProjectValuesForUpdate } from '../../helpers/formatters';

export async function publishProjects(req, res) {
    try {
        const { projectsIds } = req.body;

        if (!projectsIds) {
            return reject(res, ERROR_MESSAGES.PROJECTS.PROJECTS_IDS_NOT_PASSED);
        }

        projectsIds.forEach(async id => {
            if (!isValidUUID(id)) {
                return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { id });
            } else {
                const project = await services.getProject(id);
                if (!project) {
                    return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST, { id });
                }
            }
        });

        const publishedProjects = await services.publishProjects(projectsIds);

        return success(res, { publishedProjects });
    } catch (error) {
        console.log(error);
        return reject(res, ERROR_MESSAGES.PROJECTS.PUBLISH_PROJECTS_ERROR);
    }
}

export async function updateProject(req, res) {
    try {
        const { projectId } = req.params;
        const project = formatProjectValuesForUpdate(req.body.project);

        if (!isValidUUID(projectId)) {
            return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { projectId });
        }

        const updateProjectValidationInfo = isValidProjectForUpdate(project);
        if (updateProjectValidationInfo) {
            return reject(res, ERROR_MESSAGES.PROJECTS.INVALID_UPDATE_PROJECT_DATA, { updateProjectValidationInfo });
        }

        const updatedProject = await services.updateProject(projectId, project);

        return success(res, { updatedProject });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.PROJECTS.UPDATE_PROJECT_ERROR);
    }
}
