import { UserSQL } from "../../SQL/UserSQL";
import { UserDataSQL } from "../../SQL/UserDataSQL";
import * as bcrypt from 'bcryptjs';

import { AccessT, UserI } from "./UserE";
import { RegisterS } from "../../Service/RegisterS";
import { UserDataI } from "./UserDataE";

export class UserM {

    private userSQL: UserSQL = new UserSQL();
    private userDataSQL = new UserDataSQL()

    /**
     * Получить все пользователей
     */
    public async listAllUser(): Promise<UserI[]> {

        const listUser = await this.userSQL.listAll();

        return listUser;
    }

    /**
     * Создать пользователя
     */
    public async createNewUser(data: { login: string, pswd: string }): Promise<boolean> {
        let bCreated = false;

        const vUser = await this.userSQL.getByLogin(data.login.toLocaleLowerCase());
        if (!vUser?.id) {

            const idNewUser = await this.userSQL.add({ login: data.login.toLocaleLowerCase(), access_lvl: AccessT.base_user })

            if (idNewUser) {
                const pswdHash = bcrypt.hashSync(data.pswd, 13);
                const idNewUserData = await this.userDataSQL.add({ user_id: idNewUser, pswd: pswdHash })
                bCreated = idNewUserData > 0;
            }
        }

        return bCreated;
    }

    /**
     * Создать пользователя
     */
    public async tryLogIn(data: { login: string, pswd: string }): Promise<string> {
        let isCanLogin = false;
        let sToken = '';
        let userData: UserDataI = null;
        const registerS = new RegisterS();

        // Получить инфо пользователя
        const userInfo = await this.userSQL.getByLogin(data.login);

        if (userInfo?.id) {
            // Получить рег данные пользователя
            userData = await this.userDataSQL.getByUserId(userInfo.id);
            // Если пароль совпадает
            if (userData?.pswd) {
                isCanLogin = await bcrypt.compare(data.pswd, userData.pswd);
            }
        }

        if (isCanLogin && userData.token) {
            sToken = userData.token;
        } else if (isCanLogin) {

            sToken = registerS.createNewToken(userInfo.id, userInfo.access_lvl);
            await this.userDataSQL.updateToken(userInfo.id, { token: sToken });

        }

        return sToken;
    }
}
