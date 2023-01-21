"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MamaSQL {
    makeInsert(data) {
        console.log('data :>> ', data);
        const rows = Object.keys(data);
        const values = [];
        for (let i = 0; i < Object.values(data).length; i++) {
            const element = Object.values(data)[i];
            if (typeof element === 'string') {
                values.push(`'${element}'`);
            }
            else {
                values.push(`${element}`);
            }
        }
        const sRows = rows.join(', ').toLocaleLowerCase();
        const sValues = JSON.stringify(values).replace(/\[|\]/g, '').slice(1, -1);
        const sVqlues2 = sValues.replace(/["]/g, '');
        return { rows: sRows, values: sVqlues2 };
    }
}
exports.default = MamaSQL;
//# sourceMappingURL=MamaSQL.js.map