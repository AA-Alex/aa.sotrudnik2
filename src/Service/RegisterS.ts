import * as jwt from 'jsonwebtoken';
import { secret } from '../config/conf';

export class RegisterS {

    public createNewToken = (id: number, lvl: number) => {

        const payload = { id, lvl }

        console.log('payload :>> ', payload);
        return jwt.sign(payload, secret, { expiresIn: '7d' });
    }
}
