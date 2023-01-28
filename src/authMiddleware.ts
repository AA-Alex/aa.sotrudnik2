import * as jwt from 'jsonwebtoken';
import { secret } from './config/conf';

export default async function AuthSysMiddleware(req: any, lvl: number): Promise<{ message: any, isOk: boolean }> {
    let message = '';
    let userData: { id: number, lvl: number } = null;
    let isOk = false;

    try {
        const sToken = await req.headers?.apikey
        userData = <{ id: number, lvl: number }>jwt.verify(sToken, secret)

    } catch (e) {

        message = 'auth_error:  Ошибка авторизации' + String(e);
    }

    if ((userData?.lvl <= lvl) || (lvl === -1)) {
        isOk = true
    }

    return { message, isOk };
}


