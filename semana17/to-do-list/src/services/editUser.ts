import { connection } from "../connection";


export async function editUser(id:string, name?:string, nickname?:string):Promise<void>{

    if(id===undefined)


    if(name!==undefined && nickname!==undefined){
        console.log("primeiro if");
        const result = await connection.raw(`
            UPDATE To_do_list_users SET name = "${name}", nickname = "${nickname}" WHERE id = "${id}";
    `);
        return result;

    }else if(name!==undefined){
        console.log("segundo if");
        const result = await connection.raw(`
            UPDATE To_do_list_users SET name = "${name}" WHERE id = "${id}";
        `);
        return result;

    }else if(nickname!=undefined){
        console.log("terceiro if");
        const result = await connection.raw(`
            UPDATE To_do_list_users SET name = "${name}" WHERE id = "${id}";
        `);
        return result;
    };
};