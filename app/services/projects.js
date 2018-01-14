import {
  oneOrNone,
  manyOrNone,
} from '../db';
import {
  getSelectProjectByIdQuery,
  getSelectAllUnpublishedProjectsQuery,
  getSelectUserProjectsQuery,
  getInsertProjectQuery,
} from '../sql-queries';

export function getProject(id) {
  return oneOrNone(getSelectProjectByIdQuery(id));
}

export function getUnpublishedProjects() {
  return manyOrNone(getSelectAllUnpublishedProjectsQuery());
}

export function getUserProjects(userId) {
  return manyOrNone(getSelectUserProjectsQuery(userId));
}

export function createProject(project) {
    console.log(getInsertProjectQuery(project));
  return oneOrNone(getInsertProjectQuery(project));
}


