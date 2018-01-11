export const PRIVATE_SHA_512_KEY = '';
export const EMAIL = {
    HOST: 'mailbe01.hoster.by',
    PORT: 465,
    ADDRESS: 'info@webilesoft.com',
    PASSWORD: 'qazwsxedc123',
    AUTHOR: 'WebileSoft team <info@webilesoft.com>',
};
export const API_URL = 'http://localhost:3010';
export const ACTIVATION_LINK = process.env.NODE_ENV === 'production' ? '': `${API_URL}/activate/`;
export const RESET_PASSWORD_LINK = process.env.NODE_ENV === 'production' ? '': `${API_URL}/password-reset/`;
