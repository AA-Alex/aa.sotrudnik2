"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainReq = exports.dbMySql = exports.dbKenx = void 0;
const knex_1 = __importDefault(require("knex"));
const mysql_1 = __importDefault(require("mysql"));
exports.dbKenx = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: '0.0.0.0',
        user: 'root',
        password: '123',
        database: 'aa_table',
        decimalNumbers: true,
        dateStrings: true,
    },
    pool: { min: 0, max: 50 },
    acquireConnectionTimeout: 10000
});
exports.dbMySql = mysql_1.default.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: '123',
    database: 'aa_table'
});
exports.dbMySql.connect(e => {
    if (e) {
        console.log('БАЗА ДАННЫХ отвалилиась');
    }
    else {
        console.log('БАЗА ДАННЫХ подключена');
    }
});
async function mainReq(reqSql) {
    let responseSql = [];
    exports.dbMySql.query(reqSql, (e, resp, fields) => {
        console.log('e :>> ', e);
        responseSql = resp;
    });
    return responseSql;
}
exports.mainReq = mainReq;
//# sourceMappingURL=bd_main.js.map