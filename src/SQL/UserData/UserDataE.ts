export interface UserDataI {
    id?: number,
    user_id?: number,
    pswd?: string,
    email?: string,
    tel?: string,
    token?: string,
}

export class UserDataE {
    public static NAME = 'user_data';
}
