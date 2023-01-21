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
    async getByName(userName) {
        const sql = `
                SELECT id FROM user WHERE name = ${userName}
            `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return resp;
    }
    async add(data) {
        const rowValues = this.makeInsert(data);
        const sql = `
                INSERT INTO user (${rowValues.rows}) VALUES(${rowValues.values})
            `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return resp;
    }
}
exports.UserSQL = UserSQL;
//# sourceMappingURL=UserSQL%20copy.js.map