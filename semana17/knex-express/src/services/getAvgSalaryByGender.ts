import {connection} from "../connection";

export const getAvgSalaryByGender = async(gender: string): Promise<void>=>{
    try{
        const result = await connection.avg("salary").into("Actor").where({gender: gender});

        return console.log(result);

    }catch(error){
        console.error(error.message);
    };
};