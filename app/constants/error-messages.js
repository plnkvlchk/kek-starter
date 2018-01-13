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

    },
    FACTORIES: {
        GET_FACTORY_ERROR: {
            code: 'EC04-0001',
            message: 'Get factory error.'
        },
        GET_FACTORIES_ERROR: {
            code: 'EC04-0002',
            message: 'Get factories error.'
        },
        DELETE_FACTORY_ERROR: {
            code: 'EC04-0003',
            message: 'Delete factory error.'
        },
        FACTORY_DOES_NOT_EXIST: {
            code: 'EC04-0004',
            message: 'Factory does not exist.'
        },
        INVALID_FACTORY_DATA: {
            code: 'EC04-0005',
            message: 'Invalid factory data is passed.',
        },
        FACTORY_ALREADY_EXISTS: {
            code: 'EC04-0006',
            message: 'Factory with this name already exists.',
        },
        ADD_NEW_FACTORY_ERROR: {
            code: 'ECO4-0007',
            message: 'Add new factory error.'
        },
    },
    COMPANIES: {
        GET_COMPANY_ERROR: {
            code: 'EC05-0001',
            message: 'Get company error.'
        },
        GET_COMPANIES_ERROR: {
            code: 'EC05-0002',
            message: 'Get companies error.'
        },
        CREATE_COMPANY_ERROR: {
            code: 'EC05-0003',
            messages: 'Create company error.'
        },
        INVALID_COMPANY_DATA: {
            code: 'EC05-0004',
            message: 'Invalid company data is passed.',
        },
        COMPANY_DOES_NOT_EXIST: {
            code: 'EC05-0005',
            message: 'Company does not exist.'
        },
        DELETE_COMPANY_ERROR: {
            code: 'EC05-0006',
            message: 'Delete company error.'
        },
        USER_NOT_RELATED_TO_COMPANY: {
            code: 'EC05-0007',
            message: 'User is not related to this company.'
        },
        COMPANY_ID_VALIDATION_FAILED: {
            code: 'EC05-0008',
            message: 'Company id validation failed.'
        },
    },
    SERIES_IDENTIFIERS:{
        INVALID_SERIES_IDENTIFIER_DATA: {
            code: 'EC06-0001',
            message: 'Invalid series identifier data is passed.'
        },
        SERIES_IDENTIFIER_ALREADY_EXITS: {
            code: 'EC06-0002',
            message: 'Passed series identifier already exists.'
        },
        GET_SERIES_IDENTIFIER_ERROR: {
            code: 'EC06-0003',
            message: 'Get series identifier error.'
        },
        ADD_NEW_SERIES_IDENTIFIER_ERROR: {
            code: 'EC06-0004',
            message: 'Add new series identifier error.'
        },
    },
};
