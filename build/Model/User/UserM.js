"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserM = void 0;
const UserSQL_1 = require("../../SQL/UserSQL");
const UserDataSQL_1 = require("../../SQL/UserDataSQL");
const UserE_1 = require("./UserE");
class UserM {
    constructor() {
        this.userSQL = new UserSQL_1.UserSQL();
        this.userDataSQL = new UserDataSQL_1.UserDataSQL();
    }
    async listAllUser() {
        const listUser = await this.userSQL.listAll();
        return listUser;
    }
    async createNewUser(data) {
        let bCreated = false;
        const listUser = await this.userSQL.getByLogin(data.login);
        if (!(listUser === null || listUser === void 0 ? void 0 : listUser.length)) {
            const idNewUser = await this.userSQL.add({ login: data.login, access_lvl: UserE_1.AccessT.base_user });
            if (idNewUser) {
                const idNewUserData = await this.userDataSQL.add({ user_id: idNewUser, pswd: data.pswd });
                bCreated = idNewUserData > 0;
            }
        }
        return bCreated;
    }
}
exports.UserM = UserM;
//# sourceMappingURL=UserM.js.map