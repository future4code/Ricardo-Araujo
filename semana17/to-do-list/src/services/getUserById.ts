import {connection} from "../connection";

export async function getUserById (id: string){
    try{
        const result = await connection.raw(`
            SELECT * FROM To_do_list_users WHERE id = "${id}";
        `)

        return (result[0][0]);
    }catch(error){
        console.error(error.message);
    };
};