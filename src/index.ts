import express from 'express'
import { UserM } from './Model/UserM/UserM';

const app = express();
const iPort = 5000;

const start = () => {

    try {

        app.listen(iPort, () => console.log(`все работаdет, порт: ${iPort}`))
    } catch (e) {

        console.log('все сломалось :>> ', e);
    }

}

let aaa: any = null;
async function fa() {
    const userM: UserM = new UserM();

    aaa = await userM.listAllUser()
}



start();

fa();




