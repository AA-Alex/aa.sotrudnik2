"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSQL = void 0;
const db_main_1 = require("../config/db_main");
const MamaSQL_1 = __importDefault(require("./MamaSQL"));
class UserDataSQL extends MamaSQL_1.default {
    async getByUserId(idUser) {
        const sql = `
                    SELECT * FROM user_data 
                    WHERE user_id = ${idUser} 
                    LIMIT 1;
                `;
        let resp = [];
        try {
            resp = await (0, db_main_1.mainReq)(sql);
        }
        catch (e) {
            console.log(e, 'UserSQL.getByLogin');
        }
        return resp[0];
    }
    async add(data) {
        const rowValues = this.makeInsert(data);
        const sql = `
                REPLACE INTO user_data (${rowValues.rows}) VALUES(${rowValues.values});
            `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return (resp === null || resp === void 0 ? void 0 : resp.insertId) || 0;
    }
    async updateToken(user_id, data) {
        const sql = `
                    UPDATE user_data SET token = '${data.token}'
                    WHERE user_id = ${user_id};
                `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return (resp === null || resp === void 0 ? void 0 : resp.insertId) || 0;
    }
}
exports.UserDataSQL = UserDataSQL;
//# sourceMappingURL=UserDataSQL.js.map