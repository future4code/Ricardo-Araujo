import { createUserInputDTO } from "../dto/UsersDTO";
import { failureMessage } from "../models/messages";
import { dataTokenInput } from "../models/tokenInput";


export class UsersBusiness{

    public async signUp(
            userData:any, 
            idGenerator:any, 
            HashManager:any, 
            tokenAutenticator:any,
            UsersDatabase: any
        ):Promise<any>{

        const hashedPassword = await HashManager.hash(userData.password);
        const id = idGenerator.generate();

        const user:createUserInputDTO ={
            id: id,
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
            role: userData.role
        };

        await UsersDatabase.createUser(user);

        const dataTokenInput: dataTokenInput = {
            id: id,
            role: userData.role
        };

       const token = tokenAutenticator.generateAccessToken(dataTokenInput);

       return token;
    };


    public async login(
        userData: any,
        userDatabase: any,
        HashManager: any,
        tokenAutenticator: any
    ):Promise<any>{

        const userLogged = await userDatabase.getUserByEmail(userData.email);
       
        if(!userLogged){
            throw new Error(failureMessage.login);
        };

        const authorization = await HashManager.compare(
            userData.password, userLogged.password
        );

        if(!authorization){
            throw new Error(failureMessage.login);
        };

        const dataTokenInput: dataTokenInput = {
            id: userLogged.id,
            role: userLogged.role
        };

        const token = tokenAutenticator.generateAccessToken(dataTokenInput);

        return token;
    };

};