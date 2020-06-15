import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class USerDatabase{

    private connection = knex({
        client: "mysql",
        connection:{
        host: process.env.DB_HOST,
        port: Number(process.env.DB_port || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        }
    });

    private static TABLE_NAME = "Users";

    public async createUser(id: string, email:string, password: string):Promise<void>{
        await this.connection.insert({
            id,
            email,
            password,
        }).into(USerDatabase.TABLE_NAME);
    };
};