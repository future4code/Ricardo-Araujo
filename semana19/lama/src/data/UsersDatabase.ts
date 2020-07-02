import { BaseDatabase } from "./BaseDatabase";
import { createUserInputDTO } from "../dto/UsersDTO";


export class UsersDatabase extends BaseDatabase{

    public async createUser(body:createUserInputDTO){
        await super.getConnection().insert(body)
                    .into(BaseDatabase.TABLE_USERS);
    };

    public async getUserByEmail(email: string):Promise<any>{
        const user = await super.getConnection()
            .select("*")
            .from(BaseDatabase.TABLE_USERS)
            .where({email});

        return user[0];
    };

};