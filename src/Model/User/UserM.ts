import { UserSQL } from "../../SQL/UserSQL";
import { UserDataSQL } from "../../SQL/UserDataSQL";
import * as bcrypt from 'bcryptjs';

import { AccessT, UserI } from "./UserE";
import { RegisterS } from "../../Service/RegisterS";

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

        const listUser = await this.userSQL.getByLogin(data.login);

        if (!listUser?.length) {

            const idNewUser = await this.userSQL.add({ login: data.login, access_lvl: AccessT.base_user })

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
        const registerS = new RegisterS();

        const listUser = await this.userSQL.getByLogin(data.login);

        const idUser = listUser[0]?.id || 0;


        if (idUser) {
            const userData = await this.userDataSQL.getByUserId(idUser)

            if (userData?.pswd) {
                isCanLogin = await bcrypt.compare(data.pswd, userData.pswd)
            }
        }

        if (isCanLogin) {
            sToken = registerS.createNewToken(idUser, data.pswd)
        }

        return sToken;
    }
}
