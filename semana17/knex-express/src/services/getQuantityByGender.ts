import {connection} from "../connection";

export const getQuantityByGender = async (gender: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT gender, COUNT(*) AS quantity FROM Actor WHERE gender = '${gender}'
      `)
    
        return console.log(result[0][0]);

    }catch(error){
        console.error(error.message);
    };
};