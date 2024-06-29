import fs from 'fs';

export const readSqlFile = (filedir:string):string=>{
    return fs.readFileSync(filedir).toString();
}