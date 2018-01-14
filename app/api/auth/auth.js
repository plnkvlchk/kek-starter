import { ALLOWED_GET_ROUTES, ALLOWED_POST_ROUTES, ERROR_MESSAGES, ALLOWED_ROUTES } from '../../constants';
import { extractIdFromToken } from '../../services';
import { getUser } from '../../services';
import { reject } from '../index';
import { includes } from 'lodash';

function isAllowedRoute(req) {
    return (req.method === 'GET' && includes(ALLOWED_GET_ROUTES, req.baseUrl)) ||
        (req.method === 'POST' && includes(ALLOWED_POST_ROUTES, req.baseUrl));
}

function extractToken(req) {
    return req.headers['access-token'];
}

export async function isAuthorized(req, res) {
    if(isAllowedRoute(req)) {
        return req.next();
    }

    const token = extractToken(req);

    if(token) {
        let userIdFromToken;
        let userFromToken;

        try {
            userIdFromToken = await extractIdFromToken(token);
            userFromToken = await getUser(userIdFromToken);
        } catch (err) {
            return reject(res, ERROR_MESSAGES.AUTH.AUTHORIZATION_ERROR);
        }

        if(userFromToken) {
            res.locals.user = userFromToken;
            return req.next();
        }

        return reject(res, ERROR_MESSAGES.AUTH.AUTHORIZATION_ERROR);
    }
    return reject(res, ERROR_MESSAGES.AUTH.UNAUTHORIZED_USER);
}
