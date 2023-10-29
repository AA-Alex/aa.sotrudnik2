"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserM = void 0;
const UserSQL_1 = require("../../SQL/User/UserSQL");
const UserDataSQL_1 = require("../../SQL/UserData/UserDataSQL");
const bcrypt = __importStar(require("bcryptjs"));
const UserE_1 = require("../../SQL/User/UserE");
const RegisterS_1 = require("../../Service/RegisterS");
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
        const vUser = await this.userSQL.getByLogin(data.login.toLocaleLowerCase());
        if (!(vUser === null || vUser === void 0 ? void 0 : vUser.id)) {
            const idNewUser = await this.userSQL.add({ login: data.login.toLocaleLowerCase(), access_lvl: UserE_1.AccessT.base_user });
            if (idNewUser) {
                const pswdHash = bcrypt.hashSync(data.pswd, 13);
                const idNewUserData = await this.userDataSQL.add({ user_id: idNewUser, pswd: pswdHash });
                bCreated = idNewUserData > 0;
            }
        }
        return bCreated;
    }
    async tryLogIn(data) {
        let isCanLogin = false;
        let sToken = '';
        let userData = null;
        const registerS = new RegisterS_1.RegisterS();
        const userInfo = await this.userSQL.getByLogin(data.login);
        if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) {
            userData = await this.userDataSQL.getByUserId(userInfo.id);
            if (userData === null || userData === void 0 ? void 0 : userData.pswd) {
                isCanLogin = await bcrypt.compare(data.pswd, userData.pswd);
            }
        }
        if (isCanLogin && userData.token) {
            sToken = userData.token;
        }
        else if (isCanLogin) {
            sToken = registerS.createNewToken(userInfo.id, userInfo.access_lvl);
            await this.userDataSQL.updateToken(userInfo.id, { token: sToken });
        }
        return sToken;
    }
}
exports.UserM = UserM;
//# sourceMappingURL=UserM.js.map