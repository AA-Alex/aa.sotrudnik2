"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const AuthCtrl_1 = require("./AuthCtrl");
class MainRouter {
    constructor() {
        this.router = (0, express_1.default)();
        this.ctrl = new AuthCtrl_1.AuthCtrl();
        this.registeration = this.router.post('/registartion', this.ctrl.registartion);
        this.login = this.router.post('/login', this.ctrl.login);
        this.user = this.router.get('/user', this.ctrl.getUser);
    }
}
exports.MainRouter = MainRouter;
//# sourceMappingURL=MainRouter.js.map