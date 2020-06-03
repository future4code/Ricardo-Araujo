import axios from 'axios';
import {baseUrl} from "../URLdeBase";
import {bodyNews} from "../types";

/*
a. void, pois ela retorna apelas um console.log que é do tipo void.

b.

*/

export async function createNews(body:bodyNews):Promise<void>{
    
    try{
        await axios.put(`${baseUrl}/news`,body);
        console.log("noticia criada com sucesso")
    }catch(error){
        console.log(error);
    };

};