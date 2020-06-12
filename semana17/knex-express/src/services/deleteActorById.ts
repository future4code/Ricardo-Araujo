import {connection} from "../connection";

export const deleteActorById = async(id:string): Promise<void>=>{
    try{
        const result = await connection.delete().into("Actor").where("id", `${id}`);

        console.log(`Usuario ${id} deletado com sucesso`);
    }catch(error){
        console.error(error.message);
    };
};