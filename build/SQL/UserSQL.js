"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSQL = void 0;
const db_main_1 = require("../config/db_main");
const MamaSQL_1 = __importDefault(require("./MamaSQL"));
class UserSQL extends MamaSQL_1.default {
    async listAll() {
        const sql = `
            SELECT * FROM user
        `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return resp;
    }
    async getByLogin(userName) {
        const sql = `
                SELECT id FROM user WHERE login = "${userName.toLocaleLowerCase()}";
            `;
        let resp = [];
        try {
            resp = await (0, db_main_1.mainReq)(sql);
        }
        catch (e) {
            console.log(e, 'UserSQL.getByLogin');
        }
        return resp;
    }
    async add(data) {
        const rowValues = this.makeInsert(data);
        const sql = `
                INSERT INTO user (${rowValues.rows}) VALUES(${rowValues.values})
            `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return (resp === null || resp === void 0 ? void 0 : resp.insertId) || 0;
    }
}
exports.UserSQL = UserSQL;
//# sourceMappingURL=UserSQL.js.map