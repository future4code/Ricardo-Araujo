import {connection} from "../connection";

export const getActorById = async (id: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
      `)
    
        console.log(result[0][0]);
        return result[0][0];

    }catch(error){
        console.error(error.message);
    };
};