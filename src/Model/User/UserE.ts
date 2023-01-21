export interface UserI {
    id?: number,
    login?: string,
    name?: string,
    soname?: string,
    otchestvo?: string,
    access_lvl?: number,
}

export enum AccessT {
    root = 0, // рут всемогущий
    admin = 1, // админ
    boss = 2, // начальних цеха
    base_user = 10 // просто пользователь (зарегистрированный)
}
export class UserE {
    // а нужно ли?
}
