import axios from "axios";
import {subscriber} from "../types";
import {baseUrl} from "../URLdeBase";

/*
a. funcionalmente não tem diferença, o que muda é a sintaxe, porém em ambos os casos
o async fica antes da função, seja ela nomeada ou não.

b.
*/

export const getAllSubscribersArrow = async ():Promise<subscriber[]>=>{
    const allSubscribersResult = await axios.get(`${baseUrl}/subscribers/all`);

    return allSubscribersResult.data.map((response:any)=>{
        return{
            id: response.id,
            name: response.name,
            email: response.email
        };
    });
};