export const handler = async(event)=>{
   try{
        await new Character().create(event);
        return {
            statusCode: 200,
            body: JSON.stringify({message: 'Personagem adicionado com sucesso'})
        };
      
   }catch(error){
       return{
           statusCode:400,
           body: JSON.stringify(error.message)
       }
   }
};

import knex from "knex";
import Knex from "knex";

class BaseDatabase{

    private static connection: Knex | null = null;

    protected getConnection(): knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection:{
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME
                }
            });
        };

        return BaseDatabase.connection;
    };

}

class Character extends BaseDatabase{

    public async create(body:any){
        await super.getConnection().insert(body).into("aws_personagem")
    };
};