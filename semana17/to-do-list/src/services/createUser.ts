import {connection} from "../connection";
import {errorMessage} from "../messages";


export async function createUser (name: string, nickname:string, email:string):Promise<void>{

    if(name===undefined || nickname===undefined || email===undefined){
        throw new Error(errorMessage.createUser);
    };

    const id:string = Date.now().toString();
    const result = await connection.raw(`
        INSERT INTO To_do_list_users(id, name, nickname, email)
        VALUE( "${id}", "${name}", "${nickname}", "${email}");
    `);
    return result;
};