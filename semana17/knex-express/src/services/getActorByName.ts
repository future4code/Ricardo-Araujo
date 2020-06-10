import {connection} from "../connection";

export const getActorByName = async (name: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
      `)
    
        return console.log(result[0][0]);

    }catch(error){
        console.error(error.message);
    };
};