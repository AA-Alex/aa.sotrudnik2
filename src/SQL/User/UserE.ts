export interface UserI {
    id?: number,
    login?: string,
    name?: string,
    soname?: string,
    otchestvo?: string,
    access_lvl?: number,
}

export enum AccessT {
    root = 100, // рут всемогущий
    admin = 99, // админ
    boss = 50, // начальних цеха
    base_user = 10 // просто пользователь (зарегистрированный)
}
export class UserE {
    public static NAME = 'user';
}
