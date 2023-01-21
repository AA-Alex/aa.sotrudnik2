import { mainReq } from '../config/db_main';
import { UserI } from '../Model/User/UserE';
import MamaSQL from './MamaSQL';

export class UserSQL extends MamaSQL {

    /////////////
    // SELECT
    /////////////

    /**
     * Получить всех ползователей
     */
    public async listAll(): Promise<UserI[]> {

        const sql = `
            SELECT * FROM user
        `
        const resp = await mainReq(sql);

        return resp;
    }

    /**
     * Получить всех ползователей
     */
    public async getByLogin(userName: string): Promise<UserI[]> {

        const sql = `
                SELECT id FROM user WHERE login = "${userName.toLocaleLowerCase()}";
            `
        let resp: UserI[] = [];
        try {
            resp = await mainReq(sql);
        } catch (e) {
            console.log(e, 'UserSQL.getByLogin');

        }

        return resp;
    }

    /////////////
    // INSERT
    /////////////

    /**
     * Создать пользователя
     */
    public async add(data: UserI): Promise<number> {
        const rowValues = this.makeInsert(data);

        const sql = `
                INSERT INTO user (${rowValues.rows}) VALUES(${rowValues.values})
            `
        const resp = await mainReq(sql);

        return resp?.insertId || 0;
    }

    /////////////
    // UPDATE
    /////////////

    /////////////
    // DELETE
    /////////////
}
