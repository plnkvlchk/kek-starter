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
    getDeleteProjectQuery,
    getUpdateProjectCollectedSumQuery,
    getSelectProjectsByCategoryQuery,
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
    return manyOrNone(getUpdateProjectsToPublishedQuery(projectsIds));
}

export function updateProject(projectId, values) {
    return oneOrNone(getUpdateProjectQuery(projectId, values));
}

export function deleteProject(projectId) {
    return oneOrNone(getDeleteProjectQuery(projectId));
}

export function addDonationSumToProject(projectId, sum) {
    return oneOrNone(getUpdateProjectCollectedSumQuery(projectId, sum));
}

export function getProjectsOfCategory(category) {
    return manyOrNone(getSelectProjectsByCategoryQuery(category));
}
