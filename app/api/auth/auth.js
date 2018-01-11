import { ALLOWED_ROUTES } from '../../constants/routes';
import { verifyToken } from '../../crypt';

export async function isAuthorized(req, res) {
    if(ALLOWED_ROUTES.includes(req.baseUrl)) {
        return req.next();
    }

    const token = req.headers['x-access-token'];

    if(token) {
        let isTokenValid;

        try {
            isTokenValid = await verifyToken(token);
        } catch (err) {
            return res.status(401).send({ message: 'Bad token is passed.' });
        }

        if(isTokenValid) {
            return req.next();
        }

        return res.status(401).send({ message: 'Bad token is passed.' });
    }

    return res.status(401).send({ message: 'Unauthorized user.'});
}
