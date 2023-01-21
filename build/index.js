"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const UserM_1 = require("./Model/User/UserM");
const app = (0, express_1.default)();
const jsonParser = body_parser_1.default.json();
const iPort = 5000;
const start = async () => {
    try {
        app.listen(iPort, () => console.log(`все работаdет, порт: ${iPort}`));
    }
    catch (e) {
        console.log('все сломалось :>> ', e);
    }
};
start();
app.get('/', async (req, res) => {
    res.send('КУ-КУ ЁПТА!');
});
app.get('/user/', async (req, res) => {
    const userM = new UserM_1.UserM();
    const listUser = await userM.listAllUser();
    const response = [];
    for (let i = 0; i < listUser.length; i++) {
        const element = listUser[i];
        response.push(JSON.stringify(element));
    }
    res.send(response.join(', '));
});
app.post('/auth/create-new-user', jsonParser, async (req, res) => {
    const reqData = req.body;
    if (typeof (reqData === null || reqData === void 0 ? void 0 : reqData.login) !== 'string' || typeof (reqData === null || reqData === void 0 ? void 0 : reqData.pswd) !== 'string') {
        throw console.log('Не верный формат данных для регистрации');
    }
    const userM = new UserM_1.UserM();
    const isCreated = await userM.createNewUser(reqData);
    if (!isCreated) {
        res.send('Пользователь с таким логином уже существует!');
        throw console.log('Пользователь с таким логином уже существует');
    }
    console.log('Пользователь уcпешно создан, но это не точно =)');
    res.send('Пользователь уcпешно создан, но это не точно =)');
});
//# sourceMappingURL=index.js.map