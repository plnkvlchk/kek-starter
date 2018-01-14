import {
    oneOrNone,
    manyOrNone,
} from '../db';
import {
    getSelectAllContributionsQuery,
    getSelectUserContributionsQuery,
    getSelectProjectContributionsQuery,
    getInsertContributionQuery,
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
    console.log(getInsertContributionQuery(values))
    return oneOrNone(getInsertContributionQuery(values));
}
