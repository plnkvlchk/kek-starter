export const TABLES = {
    COMMENTS: {
        NAME: 'comments',
        COLUMNS: {
            AUTHOR_ID: 'author_id',
            PROJECT_ID: 'project_id',
            TEXT: 'text',
            DATE: 'date',
        }
    },
    PROJECTS: {
        NAME: 'projects',
        COLUMNS: {
            NEEDED_SUM: 'needed_sum',
            COLLECTED_SUM: 'collected_sum',
            CATEGORY: 'category',
            NAME: 'name',
            DESCRIPTION: 'description',
            MEDIA_URLS: 'media_urls',
            MIN_SUM_TO_DONATE: 'min_sum_to_donate',
            OWNER_ID: 'owner_id',
            IS_PUBLISHED: 'is_published',
        }
    },
    RATED: {
        NAME: 'rates',
        COLUMNS: {
            USER_ID: 'user_id',
            PROJECT_ID: 'project_id',
            VALUE: 'value',
        }
    },
    USERS: {
        NAME: 'users',
        COLUMNS: {
            EMAIL: 'email',
            LOGIN: 'login',
            PASSWORD: 'password',
            KEY: 'key',
            ROLE: 'role',
            AGE: 'age',
            COUNTRY: 'country',
            PASSWORD_ATTEMPTS: 'password_attempts',
            IS_ACTIVATED: 'is_activated',
            IS_BLOCKED: 'is_blocked',
        },
    },
};
