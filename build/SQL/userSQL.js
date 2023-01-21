"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSQL = void 0;
const db_main_1 = require("../config/db_main");
class UserSQL {
    async listAll() {
        const sql = `
            SELECT * FROM user
        `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return resp;
    }
}
exports.UserSQL = UserSQL;
//# sourceMappingURL=userSQL.js.map