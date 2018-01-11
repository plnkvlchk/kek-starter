import jwt from 'jsonwebtoken';
const JWTSecret = 'f4vb8FJu9hE9XeasszY5awQU/E2OEZ';
const expirationPeriod = '30d';

export async function getJWToken(data, expiresIn = expirationPeriod) {
    return await jwt.sign(
        data,
        JWTSecret,
        { expiresIn },
    );
}

export async function decodeJWToken(token) {
    return await jwt.verify(token, JWTSecret);
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
