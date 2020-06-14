import {connection} from "../connection";

export async function getTaskById(id:string):Promise<void>{

    const result = await connection.raw(`
        SELECT * FROM To_do_list_task WHERE id = "${id}"
    `);
    
    return result[0][0];
};