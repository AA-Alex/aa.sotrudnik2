import express from 'express'
import { UserM } from './Model/User/UserM';


const app = express();

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


start();





