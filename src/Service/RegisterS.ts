import * as jwt from 'jsonwebtoken';
import { secret } from '../config/conf';

export class RegisterS {

    public createNewToken = (id: number, pswd: string) => {

        const payload = { id, pswd }

        return jwt.sign(payload, secret, { expiresIn: '48h' });
    }
}
