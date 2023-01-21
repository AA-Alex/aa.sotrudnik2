import bodyParser from 'body-parser';
import express from 'express'
import { UserM } from './Model/User/UserM';


const app = express();
const jsonParser = bodyParser.json()

const iPort = 5000;

const start = async () => {

    try {

        app.listen(iPort, () => console.log(`все работаdет, порт: ${iPort}`))
    } catch (e) {

        console.log('все сломалось :>> ', e);
    }

}

app.get('/', async (req, res) => {
    res.send('КУ-КУ ЁПТА!')
});

app.get('/user/', async (req, res) => {

    const userM: UserM = new UserM();
    const listUser = await userM.listAllUser()

    const response: string[] = [];

    for (let i = 0; i < listUser.length; i++) {
        const element = listUser[i];
        response.push(JSON.stringify(element))

    }

    res.send(response.join(', '));
});

app.post('/auth/create-new-user', jsonParser, async (req, res) => {

    const reqData: { login: string, pswd: string } = req.body;
    if (!reqData?.login || !reqData?.pswd) {

        throw console.log('Не верный формат данных для регистрации');

    }

    const userM: UserM = new UserM();
    const isCreated = await userM.createNewUser(reqData);

    if (!isCreated) {
        res.send('Пользователь с таким логином уже существует!');
        throw console.log('Пользователь с таким логином уже существует');

    }

    res.send('БДЫЩ!');
});


start();





