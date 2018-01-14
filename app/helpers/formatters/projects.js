import { TABLES } from '../../constants';

const columns = TABLES.PROJECTS.COLUMNS;

export function formatProjectForInsertion(rawProject) {
  const project = {
    [columns.NAME]: rawProject[columns.NAME],
    [columns.DESCRIPTION]: rawProject[columns.DESCRIPTION],
    [columns.CATEGORY]: rawProject[columns.CATEGORY],
    [columns.MIN_SUM_TO_DONATE]: rawProject[columns.MIN_SUM_TO_DONATE],
    [columns.NEEDED_SUM]: rawProject[columns.NEEDED_SUM],
    [columns.OWNER_ID]: rawProject[columns.OWNER_ID],
    [columns.COLLECTED_SUM]: 0,
  };

  if(rawProject[columns.MEDIA_URLS]) {
    project[columns.MEDIA_URLS] = rawProject[columns.MEDIA_URLS];
  }

  return project;
}
