"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserV = void 0;
class UserV {
    checkRegistartionData(data) {
        var _a, _b, _c, _d;
        let sError = '';
        if (typeof (data === null || data === void 0 ? void 0 : data.login) !== 'string' || typeof (data === null || data === void 0 ? void 0 : data.pswd) !== 'string') {
            sError = 'Не верный формат данных для регистрации';
        }
        if (((_a = data === null || data === void 0 ? void 0 : data.login) === null || _a === void 0 ? void 0 : _a.length) < 4 && ((_b = data === null || data === void 0 ? void 0 : data.login) === null || _b === void 0 ? void 0 : _b.length) > 10) {
            sError = 'Логин не может быть короче 4 букв длиньше 10 букв';
        }
        if (((_c = data === null || data === void 0 ? void 0 : data.pswd) === null || _c === void 0 ? void 0 : _c.length) < 6 && ((_d = data === null || data === void 0 ? void 0 : data.pswd) === null || _d === void 0 ? void 0 : _d.length) > 12) {
            sError = 'Пароль не может быть короче 6 знаков и длиньше 12 знаков';
        }
        const sCleanLogin = `${data.login.toLowerCase().replace(/[^a-z 0-9 а-я_-]/g, '')}`;
        if (data.login.length !== (sCleanLogin === null || sCleanLogin === void 0 ? void 0 : sCleanLogin.length)) {
            sError = 'В логине допустимы только буквы и цифры, буква ё также запрещена';
        }
        return sError;
    }
}
exports.UserV = UserV;
//# sourceMappingURL=UserV.js.map