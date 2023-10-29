import { mainReq } from '../config/db_main';
import { UserI } from '../Model/User/UserE';
import MamaSQL from './MamaSQL';
import { UserE } from './UserE';

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
    public async getByLogin(sUserName: string): Promise<UserI> {

        const sql = `
                SELECT * FROM ${UserE.NAME} 
                WHERE login = "${sUserName.toLocaleLowerCase()}"
                LIMIT 1 ;
            `
        let resp: UserI = null;
        try {
            resp = (await mainReq(sql))[0];
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
