import { UserSQL } from "../../SQL/userSQL";

export class UserM {

    private userSQL: UserSQL = new UserSQL();

    /**
     * Получить все пользователей
     */
    public async listAllUser(): Promise<any[]> {

        const listUser = await this.userSQL.listAll();

        return listUser;
    }
}
