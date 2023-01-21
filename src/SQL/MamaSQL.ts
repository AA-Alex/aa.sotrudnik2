export default class MamaSQL {

    /**
     *  Собрать строку для инсерта
     */
    public makeInsert(data: any): { rows: string, values: string } {

        const rows: string[] = Object.keys(data);
        const values: string[] = []

        for (let i = 0; i < Object.values(data).length; i++) {
            const element = Object.values(data)[i];

            if (typeof element === 'string') {
                values.push(`'${element}'`)
            } else {
                values.push(`${element}`)

            }
        }

        const sRows = rows.join(', ').toLocaleLowerCase();
        const sValues = JSON.stringify(values).replace(/\[|\]/g, '').slice(1, -1)
        const sVqlues2 = sValues.replace(/["]/g, '');

        return { rows: sRows, values: sVqlues2 };
    }
}
