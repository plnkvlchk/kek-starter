'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PRIVATE_SHA_512_KEY = exports.PRIVATE_SHA_512_KEY = '';
var EMAIL = exports.EMAIL = {
    HOST: 'mailbe01.hoster.by',
    PORT: 465,
    ADDRESS: 'info@webilesoft.com',
    PASSWORD: 'qazwsxedc123',
    AUTHOR: 'WebileSoft team <info@webilesoft.com>'
};
var API_URL = exports.API_URL = 'http://localhost:3010';
var ACTIVATION_LINK = exports.ACTIVATION_LINK = process.env.NODE_ENV === 'production' ? '' : API_URL + '/activate/';
var RESET_PASSWORD_LINK = exports.RESET_PASSWORD_LINK = process.env.NODE_ENV === 'production' ? '' : API_URL + '/password-reset/';