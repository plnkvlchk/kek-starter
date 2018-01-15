const BASES = {
    PROFILE: '/profile',
    PROJECTS: '/projects',
    CONTRIBUTIONS: '/contributions',
};

const ROUTES_PARTS = {
    ACTIVATE: '/activate',
    CREATE: '/create',
    LOG_IN: '/log-in',
    SEND_UNLOCK_MAIL: '/send-unlock-mail',
    UNLOCK: '/unlock',
    OWN: '/own',
    PUBLISH: '/publish',
    UNPUBLISHED: '/unpublished',
    POPULAR: '/popular',
};

const IDS = {
  PROJECTS: '/:projectId',
  FACTORIES: '/:factoryId',
};

export const ROUTES = {
    PROJECTS: {
        BASE: BASES.PROJECTS,
        CREATE: '',
        UPDATE: IDS.PROJECTS,
        GET_BY_ID: IDS.PROJECTS,
        GET_POPULAR: ROUTES_PARTS.POPULAR,
        GET_USERS_PROJECTS: ROUTES_PARTS.OWN,
        PUBLISH: ROUTES_PARTS.PUBLISH,
        GET_ALL_UNPUBLISHED: ROUTES_PARTS.UNPUBLISHED,
        DELETE: IDS.PROJECTS,
    },
    PROFILE: {
        BASE: BASES.PROFILE,
        ACTIVATE: ROUTES_PARTS.ACTIVATE,
        CREATE: ROUTES_PARTS.CREATE,
        LOG_IN: ROUTES_PARTS.LOG_IN,
        SEND_UNLOCK_MAIL: ROUTES_PARTS.SEND_UNLOCK_MAIL,
        UNLOCK: ROUTES_PARTS.UNLOCK,
    },
    CONTRIBUTIONS: {
        BASE: BASES.CONTRIBUTIONS,
        CONTRIBUTE: IDS.PROJECTS,
        GET_OWN_CONTRIBUTIONS: ROUTES_PARTS.OWN,
        GET_PROJECTS_CONTRIBUTIONS: IDS.PROJECTS,
        GET_ALL_CONTRIBUTIONS: '',
    },
};

export const ALLOWED_GET_ROUTES = [
    '/activate/:token',
    '/profile/activate/:token',
    `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.ACTIVATE}`,
    `${ROUTES.PROJECTS.BASE}${ROUTES.PROJECTS.GET_POPULAR}`,
];

export const ALLOWED_POST_ROUTES = [
    `${ROUTES.PROFILE.BASE}`,
    `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.CREATE}`,
    `${ROUTES.PROFILE.BASE}${ROUTES.PROFILE.LOG_IN}`,

];
