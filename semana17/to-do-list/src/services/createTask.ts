import {connection} from "../connection";
import {errorMessage} from "../messages";

export async function createTask(creatorUserId:string, title: string, description: string, limitDate: string):Promise<void>{

    if(title===undefined){
        throw new Error(errorMessage.createTask);
    };

    const id: string = Date.now().toString();
    const result = await connection.raw(`
        INSERT INTO To_do_list_task(id, title, description, limitDate, creatorUserId)
        VALUE("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
    `);

    return result;
};