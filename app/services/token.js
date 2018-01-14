import jwt from 'jsonwebtoken';
const JWTSecret = 'f4vb8FJu9hE9XeasszY5awQU/E2OEZ';
const expirationPeriod = '30d';

export function getJWToken(data, expiresIn = expirationPeriod) {
    return jwt.sign(
        data,
        JWTSecret,
        { expiresIn },
    );
}

export function decodeJWToken(token) {
    return jwt.verify(token, JWTSecret);
}

export async function verifyJWToken(token) {
    try {
        const result = await jwt.verify(token, JWTSecret);

        if(result) {
            return true;
        }
    } catch(error) {
        return false;
    }
}

export async function extractIdFromToken(token) {
    const decodedData = await decodeJWToken(token);
    return decodedData.id;
}

export function getTokenForUser(user) {
    const data = {};
    data.email = user.email;
    data.login = user.login;
    data.id = user.id;

    return jwt.sign(data, JWTSecret);
}
