import mysql2 from 'mysql2/promise';

// настройки подключения к бд
export const sqlConf = ({
    host: '0.0.0.0',
    user: 'admin',
    password: 'password',
    database: 'aa_db'
});

/**
 * Шаблон для запроса к бд
 */
export async function mainReq(reqSql: string): Promise<any> {
    const init = await mysql2.createConnection(sqlConf);

    const [rows, fields] = await init.execute(reqSql);

    return rows;
}
