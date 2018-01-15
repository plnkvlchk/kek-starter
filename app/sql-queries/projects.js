import squel from 'squel';
import { TABLES } from '../constants';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.PROJECTS;
const columns = table.COLUMNS;

export function getSelectProjectByIdQuery(id){
  return squel.select()
      .from(table.NAME)
      .where(`id = '${id}'`)
      .toString();
}

export function getInsertProjectQuery(project) {
  return squelPostgres.insert()
      .into(table.NAME)
      .setFields(project)
      .returning('*')
      .toString();
}

export function getUpdateProjectQuery(id, values) {
  return squelPostgres.update()
      .table(table.NAME)
      .setFields(values)
      .where(`id = '${id}'`)
      .returning('*')
      .toString();
}

export function getSelectMostPopularProjectsQuery(count) {
  return squel.select()
      .from(table.NAME)
      .order(columns.COLLECTED_SUM)
      .limit(count)
      .toString();
}

export function getSelectUserProjectsQuery(userId) {
  return squel.select()
      .from(table.NAME)
      .where(`${columns.OWNER_ID} = '${userId}'`)
      .toString();
}

export function getUpdateProjectsToPublishedQuery(projectsIds) {
  return squelPostgres.update()
      .table(table.NAME)
      .set(columns.IS_PUBLISHED, true)
      .where(`id in (${projectsIds.map(id => `'${id}'`)})`)
      .returning('*')
      .toString();
}

export function getSelectAllUnpublishedProjectsQuery() {
  return squel.select()
      .from(table.NAME)
      .where(`${columns.IS_PUBLISHED} = 'false'`)
      .toString();
}

export function getDeleteProjectQuery(projectId) {
    return squelPostgres.delete()
        .from(table.NAME)
        .where(`id = '${projectId}'`)
        .returning('*')
        .toString();
}

export function getUpdateProjectCollectedSumQuery(projectId, sum) {
    // return squelPostgres.update()
    //     .table(table.NAME)
    //     .set(columns.COLLECTED_SUM, `${columns.COLLECTED_SUM} + ${sum}`)
    //     .where(`id = '${projectId}'`)
    //     .toString();
    return `UPDATE projects SET collected_sum = collected_sum + ${sum} WHERE (id = '${projectId}') RETURNING *`
}

export function getSelectProjectsByCategoryQuery(category) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.CATEGORY} = '${category}'`)
        .toString();
}

//export function delete project and return money
