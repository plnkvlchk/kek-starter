export const ERROR_MESSAGES = {
    VALIDATION: {
        SHOULD_NOT_BE_EMPTY: {
            code: 'EC01-0001',
            message: 'Value cannot be empty.',
        },
        VALUE_NOT_PASSED: {
            code: 'EC01-0002',
            message: 'Value is not passed.',
        },
        INVALID_VALUE: {
            code: 'EC01-0003',
            message: 'Invalid value is passed.',
        },
        SHOULD_BE_STRING: {
            code: 'EC01-0004',
            message: 'Value should be a string.',
        },
        SHOULD_BE_OBJECT: {
            code: 'EC01-0005',
            message: 'Value should be an object.',
        },
        INVALID_ID_FORMAT: {
            code: 'EC01-0006',
            message: 'Invalid id is passed.'
        },
        INVALID_EMAIL_FORMAT: {
            code: 'EC01-0007',
            message: 'Invalid email is passed.'
        },
        SHOULD_BE_NUMBER: {
            code: 'EC01-0008',
            message: 'Value should be a number.'
        },
        SHOULD_BE_ARRAY: {
            code: 'EC01-0009',
            message: 'Value should be an array.'
        },
        INVALID_URL_FORMAT: {
            code: 'EC01-0010',
            message: 'Invalid images URLs.'
        },
        CATEGORY_NOT_EXISTS: {
            code: 'EC01-0011',
            message: 'This category does not exist.'
        },
    },
    AUTH: {
        INVALID_TOKEN: {
            code: 'EC02-0001',
            message: 'Invalid token passed.',
        },
        AUTHORIZATION_ERROR: {
            code: 'EC02-0002',
            message: 'Bad token is passed.'
        },
        UNAUTHORIZED_USER: {
            code: 'EC02-0003',
            message: 'Unauthorized user.'
        },
        NOT_ENOUGH_RIGHTS: {
            code: 'EC02-0004',
            message: 'User has insufficient rights.'
        },
    },
    PROFILE: {
        INVALID_LOG_IN_DATA: {
            code: 'EC03-0001',
            message: 'Invalid log in data is passed.',
        },
        INVALID_EMAIL: {
            code: 'EC03-0002',
            message: 'Profile with passed email does not exist.',
        },
        INVALID_PASSWORD: {
            code: 'EC03-0003',
            message: 'Wrong password is passed.',
        },
        INVALID_PROFILE_DATA: {
            code: 'EC03-0004',
            message: 'Invalid profile data is passed.',
        },
        INVALID_SIGN_UP_CODE: {
            code: 'EC03-0005',
            message: 'Wrong sign up code is passed.',
        },
        EMAIL_ALREADY_USED: {
            code: 'EC03-0006',
            message: 'Email is already in use.',
        },
        CREATE_PROFILE_ERROR: {
            code: 'EC03-0007',
            message: 'Create profile error.',
        },
        USER_ALREADY_ACTIVATED: {
            code: 'EC03-0008',
            message: 'User has already been activated.',
        },
        USER_NOT_EXIST: {
            code: 'EC03-0009',
            message: 'User doesn\'t exist.',
        },
        ACTIVATION_ERROR: {
            code: 'EC03-0010',
            message: 'User wasn\'t activated.',
        },
        RESEND_FAILED: {
            code: 'EC03-0011',
            message: 'Email confirmation resend failed.'
        },
        PASSWORD_RESET_FAILED: {
            code: 'EC03-0012',
            message: 'Password reset failed.'
        },
        PASSWORD_UPDATE_ERROR: {
            code: 'EC03-0013',
            message: 'Password update error',
        },
        EXPIRED_CODE: {
            code: 'EC03-0014',
            message: 'Code is expired.',
        },
        GET_PROFILE_ERROR: {
            code: 'EC03-0015',
            message: 'Get profile error.'
        },
        WRONG_PASSWORD: {
            code: 'EC03-0016',
            message: 'Wrong password is passed.'
        },
        LOG_IN_ERROR: {
            code: 'EC03-0017',
            message: 'Log in error.'
        },
        LOGIN_ALREADY_USED: {
            code: 'EC03-0018',
            message: 'Login is already in use.'
        },
        LOGIN_OR_EMAIL_SHOULD_BE_PASSED: {
            code: 'EC03-0019',
            message: 'Either login or email should be passed.'
        },
    },
    PROJECTS: {
        INVALID_PROJECT_DATA: {
            code: 'EC04-0001',
            message: 'Invalid project data is passed.'
        },
        CREATE_PROJECT_ERROR: {
            code: 'EC04-0002',
            message: 'Create project error.'
        },
        GET_POPULAR_PROJECTS_ERROR: {
            code: 'EC04-0003',
            message: 'Get popular projects error.'
        },
        GET_UNPUBLISHED_PROJECTS_ERROR: {
            code: 'EC04-0004',
            message: 'Get unpublished projects error.'
        },
        GET_USER_PROJECTS_ERROR: {
            code: 'EC04-0005',
            message: 'Get user\'s projects error.'
        },
        GET_PROJECT_ERROR: {
            code: 'EC04-0006',
            message: 'Get project error.'
        },
        PROJECT_DOES_NOT_EXIST: {
            code: 'EC04-0007',
            message: 'Project does not exist.'
        },
        PUBLISH_PROJECTS_ERROR: {
            code: 'EC04-0008',
            message: 'Publish projects error.'
        },
        PROJECTS_IDS_NOT_PASSED: {
            code: 'EC04-0009',
            message: 'Projects ids to publish are not passed.'
        },
        UPDATE_PROJECT_ERROR: {
            code: 'EC04-0010',
            message: 'Update project error.'
        },
        INVALID_UPDATE_PROJECT_DATA: {
            code: 'EC04-0011',
            message: 'Invalid update project data is passed.'
        },
    },
    CONTRIBUTIONS: {
        GET_USER_CONTRIBUTIONS_ERROR: {
            code: 'EC05-0001',
            message: 'Get user contributions error.'
        },
        GET_PROJECT_CONTRIBUTIONS_ERROR: {
            code: 'EC05-0002',
            message: 'Get project contributions error.'
        },
        GET_ALL_CONTRIBUTIONS_ERROR: {
            code: 'EC05-0003',
            message: 'Get all contributions error.'
        },
        ADD_CONTRIBUTION_ERROR: {
            code: 'EC05-0004',
            message: 'Add contribution error.'
        },
    }
};
