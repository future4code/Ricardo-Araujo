import { connection } from "../connection";
import {errorMessage} from "../messages";

// export async function editUser(id:string, name?:string, nickname?:string):Promise<void>{

//     if(id===undefined){
//         throw new Error(errorMessage.editUser);
//     };


//     if(name!==undefined && nickname!==undefined){
//         const result = await connection.raw(`
//             UPDATE To_do_list_users SET name = "${name}", nickname = "${nickname}" WHERE id = "${id}";
//     `);
//         return result;

//     }else if(name!==undefined){
//         const result = await connection.raw(`
//             UPDATE To_do_list_users SET name = "${name}" WHERE id = "${id}";
//         `);
//         return result;

//     }else if(nickname!=undefined){
//         const result = await connection.raw(`
//             UPDATE To_do_list_users SET name = "${name}" WHERE id = "${id}";
//         `);
//         return result;
//     };
// };

export async function editUser(id:string, name?:string, nickname?:string):Promise<void>{

    const updatedUser : {name?:string, nickname?:string} = {};

    if(name){
        updatedUser['name'] = name;
    };

    if(nickname){
        updatedUser['nickname'] = nickname;
    };

    await connection("To_do_list_users").where({id}).update(updatedUser);
};
