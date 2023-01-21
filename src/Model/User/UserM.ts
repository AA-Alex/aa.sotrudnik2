import { UserSQL } from "../../SQL/userSQL";

export class UserM {

    private userSQL: UserSQL = new UserSQL();

    /**
     * Получить все пользователей
     */
    public async listAllUser(): Promise<{
        id: number,
        name: string,
        soname: string,
        otchestvo: string,
        access_lvl: number,
        email: string, tel:
        string
    }[]
    > {

        const listUser = await this.userSQL.listAll();

        return listUser;
    }
}
