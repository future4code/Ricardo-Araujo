exports.handler = async(event)=>{
    new Character().create(event)
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

    public create(body:any){
        super.getConnection().insert(body).into("aws_personagem")
    };
};