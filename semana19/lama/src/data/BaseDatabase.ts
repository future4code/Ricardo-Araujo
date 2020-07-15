import knex from "knex";
import Knex from "knex";

export abstract class BaseDatabase{

    protected static TABLE_USERS: string = "lama_users";
    protected static TABLE_BANDS: string = "lama_bands";
    protected static TABLE_SHOWS: string = "lama_shows";


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

    public async destroyConnection():Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        };
    };
};