import nodemailer from 'nodemailer';
import { EMAIL } from '../constants';

let transporter;

export const initMailService = () => new Promise((res, rej) => {
    nodemailer.createTestAccount(err => {
        if (err) {
            return rej(err);
        }

        transporter = nodemailer.createTransport({
            host: EMAIL.HOST,
            port: EMAIL.PORT,
            secure: true,
            auth: {
                user: EMAIL.ADDRESS,
                pass: EMAIL.PASSWORD,
            },
        });
        console.info('init complete');
        res();
    });
});

export const sendEmail = (to, subject, html) => new Promise(async (res, rej) => {
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
