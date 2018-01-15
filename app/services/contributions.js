import {
    oneOrNone,
    manyOrNone,
} from '../db';
import {
    getSelectAllContributionsQuery,
    getSelectUserContributionsQuery,
    getSelectProjectContributionsQuery,
    getInsertContributionQuery,
    getDeleteProjectContributionsQuery,
} from '../sql-queries';

export function getAllContributions() {
    return manyOrNone(getSelectAllContributionsQuery());
}

export function getUserContributions(userId) {
    return manyOrNone(getSelectUserContributionsQuery(userId));
}

export function getProjectContributions(projectId) {
    return manyOrNone(getSelectProjectContributionsQuery(projectId));
}

export function donateToProject(values) {
    return oneOrNone(getInsertContributionQuery(values));
}

export function deleteProjectContributions(projectId){
    return manyOrNone(getDeleteProjectContributionsQuery(projectId));
}
