"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCtrl = void 0;
class AuthCtrl {
    async registartion(req, resp) {
        try {
            resp.json('РЕСГРИСТРАЦИЯ ВЫЗВАЛСЯ');
        }
        catch (e) {
            console.log('e :>> ', e);
        }
    }
    async login(req, resp) {
        try {
            resp.json('ЛОГИН ВЫЗВАЛСЯ');
        }
        catch (e) {
            console.log('e :>> ', e);
        }
    }
    async getUser(req, resp) {
        console.log('111111111111111111111111');
        try {
            resp.json('ЮЗЕР ВЫЗВАЛСЯ');
        }
        catch (e) {
            console.log('e :>> ', e);
        }
    }
}
exports.AuthCtrl = AuthCtrl;
//# sourceMappingURL=AuthCtrl.js.map