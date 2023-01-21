import { mainReq } from "../config/db_main";

export class UserSQL {

    /////////////
    // SELECT
    /////////////

    /**
     * Получить всех ползователей
     */
    public async listAll(): Promise<any[]> {

        const sql = `
            SELECT * FROM user
        `
        const resp = await mainReq(sql);

        return resp;
    }

    /////////////
    // INSERT
    /////////////

    /////////////
    // UPDATE
    /////////////

    /////////////
    // DELETE
    /////////////
}
