"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserM = void 0;
const userSQL_1 = require("../../SQL/userSQL");
class UserM {
    constructor() {
        this.userSQL = new userSQL_1.UserSQL();
    }
    async listAllUser() {
        const listUser = await this.userSQL.listAll();
        return listUser;
    }
}
exports.UserM = UserM;
//# sourceMappingURL=UserM.js.map