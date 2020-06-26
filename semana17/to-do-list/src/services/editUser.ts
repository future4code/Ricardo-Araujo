import { connection } from "../connection";
import {errorMessage} from "../messages";

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
