import { success, reject } from '../';
import { isValidUUID } from '../../helpers/validators';
import { ERROR_MESSAGES, CATEGORIES } from '../../constants';
import * as services from '../../services';

export async function getProjectById(req, res) {
  try {
    const { projectId } = req.params;

    if (!isValidUUID(projectId)) {
      return reject(res, ERROR_MESSAGES.VALIDATION.INVALID_ID_FORMAT, { projectId });
    }

    const project = await services.getProject(projectId);
    if (!project) {
      return reject(res, ERROR_MESSAGES.PROJECTS.PROJECT_DOES_NOT_EXIST, { projectId });
    }

    return success(res, {project});
  } catch (error) {
    return reject(res, ERROR_MESSAGES.PROJECTS.GET_PROJECT_ERROR, { error });
  }
}

export async function getUserProjects(req, res) {
  try {
    const projects = await services.getUserProjects(res.locals.user.id);

    return success(res, { projects });
  } catch (error) {
    return reject(res, ERROR_MESSAGES.PROJECTS.GET_USER_PROJECTS_ERROR, { error });
  }
}

export async function getUnpublishedProjects(req, res) {
  try {
    const unpublishedProjects = await services.getUnpublishedProjects();

    return success(res, { unpublishedProjects });
  } catch (error) {
    return reject(res, ERROR_MESSAGES.PROJECTS.GET_UNPUBLISHED_PROJECTS_ERROR, { error });
  }
}

export async function getMostPopularProjects(req, res) {
    try {
        const { count } = req.query;

        const projects = await services.getPopularProjects(count || 10);

        return success(res, { projects });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.PROJECTS.GET_POPULAR_PROJECTS_ERROR);
    }
}

export async function getProjectsOfCategory(req, res) {
    try {
        const { category } = req.params;

        if (!Object.values(CATEGORIES).includes(category)) {
            return reject(res, ERROR_MESSAGES.VALIDATION.CATEGORY_NOT_EXISTS, { category });
        }

        const projects = await services.getProjectsOfCategory(category);

        return success(res, { projects });
    } catch (error) {
        return reject(res, ERROR_MESSAGES.PROJECTS.GET_PROJECTS_OF_CATEGORY_ERROR, { error });
    }
}
