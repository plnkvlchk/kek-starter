import {
    oneOrNone,
    manyOrNone,
} from '../db';
import {
    getSelectProjectByIdQuery,
    getSelectAllUnpublishedProjectsQuery,
    getSelectUserProjectsQuery,
    getInsertProjectQuery,
    getSelectMostPopularProjectsQuery,
    getUpdateProjectsToPublishedQuery,
    getUpdateProjectQuery,
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
  return oneOrNone(getInsertProjectQuery(project));
}

export function getPopularProjects(count) {
    return manyOrNone(getSelectMostPopularProjectsQuery(count));
}

export function publishProjects(projectsIds) {
    console.log(getUpdateProjectsToPublishedQuery(projectsIds));
    return manyOrNone(getUpdateProjectsToPublishedQuery(projectsIds));
}

export function updateProject(projectId, values) {
    console.log(getUpdateProjectQuery(projectId, values));
    return oneOrNone(getUpdateProjectQuery(projectId, values));
}
