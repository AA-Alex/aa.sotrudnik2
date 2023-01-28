import * as jwt from 'jsonwebtoken';
import { secret } from './config/conf';



export default async function AuthSysMiddleware(req: any, res: any) {
    let out: any = null;


    try {
        const sToken = await req.headers?.apikey

        console.log('sToken :>> ', sToken);

        if (!sToken) {

            out = res.status(403).json({ auth_error: ' Ошибка авторизации' })
        } else {

            req.user_data = jwt.verify(sToken, secret)
        }

    } catch (e) {

        out = res.status(403).json({ auth_error: ' Ошибка авторизации' }, e)
    }

    console.log(' req.user_data :>> ', req.user_data);
    return out;
}


