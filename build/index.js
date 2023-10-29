"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("./authMiddleware"));
const UserM_1 = require("./Model/User/UserM");
const UserV_1 = require("./Model/User/UserV");
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
    res.sendFile(__dirname + '/Frontend/main.html');
});
app.get('/user/', async (req, res) => {
    const accessCheck = await (0, authMiddleware_1.default)(req, 10);
    if (!(accessCheck === null || accessCheck === void 0 ? void 0 : accessCheck.isOk)) {
        res.sendFile(__dirname + '/Frontend/main.html');
        throw console.log('Ошибка доступа');
    }
    res.sendFile('Страница польозотвалей для зерегистрированных пользователей');
});
app.post('/auth/create-new-user', jsonParser, async (req, res) => {
    const userV = new UserV_1.UserV();
    const reqData = req.body;
    const checkValid = userV.checkRegistartionData(reqData);
    if (checkValid) {
        res.send(checkValid);
        throw console.log(checkValid);
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
app.post('/auth/login', jsonParser, async (req, res) => {
    const userV = new UserV_1.UserV();
    const reqData = req.body;
    const checkValid = userV.checkRegistartionData(reqData);
    if (checkValid) {
        res.send(checkValid);
        throw console.log(checkValid);
    }
    const userM = new UserM_1.UserM();
    const sToken = await userM.tryLogIn(reqData);
    if (!sToken) {
        res.send('Не корректный логин или пароль');
        throw console.log('Не корректный логин или пароль');
    }
    res.send('Авторизация прошла успешно');
});
//# sourceMappingURL=index.js.map