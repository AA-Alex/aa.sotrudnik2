"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSQL = void 0;
const db_main_1 = require("../config/db_main");
const MamaSQL_1 = __importDefault(require("./MamaSQL"));
class UserDataSQL extends MamaSQL_1.default {
    async add(data) {
        const rowValues = this.makeInsert(data);
        const sql = `
                REPLACE INTO user_data (${rowValues.rows}) VALUES(${rowValues.values});
            `;
        const resp = await (0, db_main_1.mainReq)(sql);
        return resp;
    }
}
exports.UserDataSQL = UserDataSQL;
//# sourceMappingURL=UserDataSQL.js.map