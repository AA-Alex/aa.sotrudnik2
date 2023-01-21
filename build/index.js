"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserM_1 = require("./Model/UserM/UserM");
const app = (0, express_1.default)();
const iPort = 5000;
const start = () => {
    try {
        app.listen(iPort, () => console.log(`все работаdет, порт: ${iPort}`));
    }
    catch (e) {
        console.log('все сломалось :>> ', e);
    }
};
let aaa = null;
async function fa() {
    const userM = new UserM_1.UserM();
    aaa = await userM.listAllUser();
}
start();
fa();
//# sourceMappingURL=index.js.map