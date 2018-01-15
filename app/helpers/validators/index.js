export * from './projects';
export * from './users';

import { isString, find } from 'lodash';

export function isValidUUID(uuid) {
    return isString(uuid) && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
}

export function isValidEmail(email) {
    return isString(email) && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

export function isValidURLsArray(URLsArray) {
    return true;
    // find(URLsArray, )
}

export function isValidCardNumber(cardNumber) {
        // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(cardNumber)) return false;

        // The Luhn Algorithm. It's so pretty.
        let nCheck = 0, nDigit = 0, bEven = false;
        cardNumber = cardNumber.replace(/\D/g, "");

        for (let n = cardNumber.length - 1; n >= 0; n--) {
            let cDigit = cardNumber.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
}
