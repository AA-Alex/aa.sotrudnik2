export class UserV {

    public checkRegistartionData(data: any): string {

        let sError = ''
        if (typeof data?.login !== 'string' || typeof data?.pswd !== 'string') {
            sError = 'Не верный формат данных для регистрации'
        }

        if (data?.login?.length < 4 && data?.login?.length > 10) {
            sError = 'Логин не может быть короче 4 букв длиньше 10 букв'
        }

        if (data?.pswd?.length < 6 && data?.pswd?.length > 12) {
            sError = 'Пароль не может быть короче 6 знаков и длиньше 12 знаков'
        }

        const sCleanLogin = `${data.login.toLowerCase().replace(/[^a-z 0-9 а-я_-]/g, '')}`;

        if (data.login.length !== sCleanLogin?.length) {
            sError = 'В логине допустимы только буквы и цифры, буква ё также запрещена'
        }

        return sError;
    }
}
