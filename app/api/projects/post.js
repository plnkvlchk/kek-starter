import * as services from '../../services';
import { reject, success } from '../';
import { isValidProject, isValidUUID } from '../../helpers/validators';
import { formatProjectForInsertion } from '../../helpers/formatters';
import { TABLES, ERROR_MESSAGES } from '../../constants';

export async function createProject(req, res) {
    try {
          const projectData = formatProjectForInsertion({
              [TABLES.PROJECTS.COLUMNS.OWNER_ID]: res.locals.user.id,
              ...req.body.project
          });

          const projectValidationInfo = isValidProject(projectData);
          if (projectValidationInfo) {
              return reject(res, ERROR_MESSAGES.PROJECTS.INVALID_PROJECT_DATA, { projectValidationInfo });
          }

          const project = await services.createProject(projectData);
          if(!project) {
              return reject(res, ERROR_MESSAGES.PROJECTS.CREATE_PROJECT_ERROR)
          }

          return success(res, { project });
    } catch (error) {
          return reject(res, ERROR_MESSAGES.PROJECTS.CREATE_PROJECT_ERROR, { error });
    }
}
