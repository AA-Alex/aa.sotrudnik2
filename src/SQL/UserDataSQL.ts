import { mainReq } from '../config/db_main';
import { UserDataI } from '../Model/User/UserDataE';
import MamaSQL from './MamaSQL';

export class UserDataSQL extends MamaSQL {

    /////////////
    // SELECT
    /////////////

    /**
     * Получить всех ползователей
     */

    /////////////
    // INSERT
    /////////////

    /**
     * Добавить доп инфо о пользователе
     */
    public async add(data: UserDataI): Promise<number> {
        const rowValues = this.makeInsert(data);

        const sql = `
                REPLACE INTO user_data (${rowValues.rows}) VALUES(${rowValues.values});
            `;
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
