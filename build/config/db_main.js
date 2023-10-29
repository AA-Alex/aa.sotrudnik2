"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainReq = exports.sqlConf = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.sqlConf = ({
    host: '0.0.0.0',
    user: 'admin',
    password: 'password',
    database: 'aa_db'
});
async function mainReq(reqSql) {
    const init = await promise_1.default.createConnection(exports.sqlConf);
    const [rows, fields] = await init.execute(reqSql);
    return rows;
}
exports.mainReq = mainReq;
//# sourceMappingURL=db_main.js.map