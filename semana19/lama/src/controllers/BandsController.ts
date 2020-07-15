import { Request, Response } from 'express';
import { BandBusiness } from '../business/BandBusiness';
import { tokenAuthenticator } from '../services/tokenAutenticator';
import { IdGenerator } from '../services/idGenerator';
import { BandDatabase } from '../data/BandDatabase';
import { sucessMessage } from '../models/messages';

export class BandsController{

    public async createBand(req: Request, res: Response){   
        try{
            const bandData ={
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.auth
            };

            await new BandBusiness().createBand(
                bandData,
                new tokenAuthenticator,
                new IdGenerator,
                new BandDatabase
            );

            res.status(200).send(sucessMessage.createBand);
        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new BandDatabase().destroyConnection();
    };


    public async getBand(req:Request, res:Response){
        try{
          const data = {
              token: req.headers.auth,
              id: req.params.id
          };

          const band = await new BandBusiness().getBand(
                data,
                new BandDatabase,
                new tokenAuthenticator
          );

          res.status(200).send(band);

        }catch(error){
            res.status(400).send({ message: error.message });
        };
        await new BandDatabase().destroyConnection();
    };


};