import { Request, Response } from 'express'
import { UsersBusiness } from '../business/UsersBusiness';
import { IdGenerator } from '../services/idGenerator';
import { HashManager } from '../services/HashManager';
import {tokenAuthenticator} from "../services/tokenAutenticator";
import { UsersDatabase } from '../data/UsersDatabase';


export class UsersController{
    public async signUp(req: Request, res: Response){
        try{
            const userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };

            const signUpUser = await new UsersBusiness().signUp(
                userData, 
                new IdGenerator, 
                new HashManager, 
                new tokenAuthenticator,
                new UsersDatabase);

            res.status(200).send({token: signUpUser})
        }catch(error){
            res.status(400).send({ message: error.message });
        };
    
        await new UsersDatabase().destroyConnection();
    };

    public async login(req: Request, res: Response){
        try{
            const userData = {
                email: req.body.email,
                password: req.body.password
            };

            const loginUser = await new UsersBusiness().login(
                userData,
                new UsersDatabase,
                new HashManager,
                new tokenAuthenticator);
   
            res.status(200).send({token: loginUser});
        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new UsersDatabase().destroyConnection();
    };



};