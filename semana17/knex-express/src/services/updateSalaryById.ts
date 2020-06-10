import {connection} from "../connection";

export const updateSalaryById = async(id: string, salary: number):Promise<void>=>{
    try{
        const result = await connection.update({
            salary: salary}).into("Actor").where("id", `${id}`);

        console.log("Salario alterado com sucesso");
    }catch(error){
        console.error(error.message);
    };
};