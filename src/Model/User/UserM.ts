import { UserSQL } from "../../SQL/UserSQL";
import { UserDataSQL } from "../../SQL/UserDataSQL";

import { UserI } from "./UserE";

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

            const idNewUser = await this.userSQL.add({ login: data.login })

            if (idNewUser) {

                await this.userDataSQL.add({ user_id: idNewUser, pswd: data.pswd })
                bCreated = true;
            }

        }

        return bCreated;
    }
}
