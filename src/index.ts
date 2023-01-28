import bodyParser from 'body-parser';
import express from 'express'
import AuthSysMiddleware from './authMiddleware';
import { UserM } from './Model/User/UserM';
import { UserV } from './Model/User/UserV';

const app = express();
const jsonParser = bodyParser.json()

const iPort = 5000;

/**
 * Запускатор сервера
 */
const start = async () => {
    try {
        app.listen(iPort, () => console.log(`все работаdет, порт: ${iPort}`))
    } catch (e) {
        console.log('все сломалось :>> ', e);
    }
}
start();

// главная страница
app.get('/', async (req, res) => {
    res.send('КУ-КУ ЁПТА!')
});

// получить всех юзеров (тестовое)
app.get('/user/', async (req, res) => {

    const aaa = await AuthSysMiddleware(req, res)
    console.log('aaa :>> ', aaa);

    const userM: UserM = new UserM();
    const listUser = await userM.listAllUser()

    const response: string[] = [];

    for (let i = 0; i < listUser.length; i++) {
        const element = listUser[i];
        response.push(JSON.stringify(element))

    }

    res.send(response.join(', '));
});

// Создать пользователя с логином и паролем
app.post('/auth/create-new-user', jsonParser, async (req, res) => {
    const userV = new UserV();

    // Валидация
    const reqData: { login: string, pswd: string } = req.body;
    const checkValid = userV.checkRegistartionData(reqData);
    if (checkValid) {
        res.send(checkValid);
        throw console.log(checkValid);
    }

    const userM: UserM = new UserM();
    const isCreated = await userM.createNewUser(reqData);

    if (!isCreated) {
        res.send('Пользователь с таким логином уже существует!');
        throw console.log('Пользователь с таким логином уже существует');
    }

    console.log('Пользователь уcпешно создан, но это не точно =)')
    res.send('Пользователь уcпешно создан, но это не точно =)');
});

// Авторизация
app.post('/auth/login', jsonParser, async (req, res) => {
    const userV = new UserV();

    // Валидация
    const reqData: { login: string, pswd: string } = req.body;
    const checkValid = userV.checkRegistartionData(reqData);
    if (checkValid) {
        res.send(checkValid);
        throw console.log(checkValid);
    }

    const userM: UserM = new UserM();
    const sToken = await userM.tryLogIn(reqData);

    if (!sToken) {
        res.send('Не корректный логин или пароль');
        throw console.log('Не корректный логин или пароль');
    }

    console.log('Авторизация прошла успешно')
    res.send(`
    Авторизация прошла успешно
    user_token = ${sToken}
    `
    );

});







