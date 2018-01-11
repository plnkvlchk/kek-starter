import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = 'secret';

export async function encryptPassword(password, key) {
    const salt = key || await bcrypt.genSalt(SALT_ROUNDS);
    const encryptedPassword = await bcrypt.hash(password, salt);

    return { encryptedPassword, salt };
}

export async function verifyToken(token) {
    return await jwt.verify(token, JWT_SECRET);
}

export async function getTokenForUser(user) {
    const data = {};
    data.email = user.email;
    data.id = user.id;

    return await jwt.sign(data, JWT_SECRET);
}
