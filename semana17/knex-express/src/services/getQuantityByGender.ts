import {connection} from "../connection";

export const getQuantityByGender = async (gender: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT gender, COUNT(*) AS quantity FROM Actor WHERE gender = '${gender}'
      `)
    
        console.log(result[0][0]);
        return result[0][0];

    }catch(error){
        console.error(error.message);
    };
};