import { success, reject } from '../';
import { isValidUUID } from '../../helpers/validators';
import * as services from '../../services';

export async function getProjectById(req, res) {
  try {
    const { projectId } = req.params;

    if (!isValidUUID(projectId)) {
      return reject(res, 'Invalid id format.', { projectId });
    }

    const project = await services.getProject(projectId);
    if (!project) {
      return reject(res, 'Project does not exist.', { projectId });
    }

    return success(res, {project});
  } catch (error) {
    return reject(res, 'Get project error.', { error });
  }
}

export async function getUserProjects(req, res) {
  try {
    const projects = await services.getUserProjects(res.locals.user.id);

    return success(res, { projects });
  } catch (error) {
    return reject(res, 'Get user\'s projects error.', { error });
  }
}

export async function getUnpublishedProjects(req, res) {
  try {
    const unpublishedProjects = await services.getUnpublishedProjects();

    return success(res, { unpublishedProjects });
  } catch (error) {
    return reject(res, 'Get unpublished projects error.', { error });
  }
}
