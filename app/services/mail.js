import ejs from 'ejs';
import path from 'path';
import nodemailer from 'nodemailer';

import { EMAIL, ACTIVATION_LINK, RESET_PASSWORD_LINK } from '../constants';
import { getJWToken } from '../services';

let transporter;

export const initMailService = () => new Promise((res, rej) => {
    nodemailer.createTestAccount(err => {
        if (err) {
            return rej(err);
        }

        // // transporter = nodemailer.createTransport({
        transporter = nodemailer.createTransport({
            // host: EMAIL.HOST,
            // port: EMAIL.PORT,
            // secure: true,
            host: 'smtp.gmail.com',
            port: 465,
            // service: "Gmail",
            auth: {
                // user: EMAIL.ADDRESS,
                // pass: EMAIL.PASSWORD,
                user: "poline.hadaronok@gmail.com",
                pass: "gfkbif13",
            }
        });

        // transporter = nodemailer.createTransport({
        //     host: EMAIL.HOST,
        //     port: EMAIL.PORT,
        //     secure: true,
        //     auth: {
        //         user: EMAIL.ADDRESS,
        //         pass: EMAIL.PASSWORD,
        //     },
        // });
        console.info('init complete');
        res();
    });
});

export function sendMail(to, subject, html) {
    return new Promise(async (res, rej) => {
        if (!transporter) {
            await initMailService();
        }

        transporter.sendMail({
            from: EMAIL.AUTHOR,
            to,
            subject,
            html,
        }, (error) => {
            if (error) {
                return rej(error);
            }
            res();
        });
    });
}

export function sendActivationMail(id, email) {
    return new Promise(async (res, rej) => {
        const invitation = await getJWToken({ id }, '1d');
        const link = `${ACTIVATION_LINK}${invitation}`;

        const header = 'Registration';
        const filename = path.resolve(__dirname, '../templates/sign-up.ejs');
        const data = { link };
        const options = {};

        ejs.renderFile(
            filename,
            data,
            options,
            (error, template) => {
                if(!error) {
                    sendMail(email, header, template);
                    res();
                } else {
                    rej(error);
                }
            }
        );
    });
}

export function sendConfirmationMail(id, email) {
    return new Promise(async (res, rej) => {
        const invitation = await getJWToken({ id }, '1d');
        const link = `${ACTIVATION_LINK}${invitation}`;

        const header = 'Email confirmation';
        const filename = path.resolve(__dirname, '../templates/sign-up.ejs');
        const data = {link};
        const options = {};

        ejs.renderFile(
            filename,
            data,
            options,
            (error, template) => {
                if (!error) {
                    sendMail(email, header, template);
                    res();
                } else {
                    rej(error);
                }
            }
        );
    });
}

export function sendResetPasswordMail(id, email) {
    return new Promise(async (res, rej) => {
        const invitation = await getJWToken({ id }, '1d');
        const link = `${RESET_PASSWORD_LINK}${invitation}`;

        const header = 'Reset password';
        const filename = path.resolve(__dirname, '../templates/reset-password.ejs');
        const data = { link };
        const options = {};

        ejs.renderFile(
            filename,
            data,
            options,
            (error, template) => {
                if(!error) {
                    sendMail(email, header, template);
                    res();
                } else {
                    rej(error);
                }
            }
        );
    });
}
