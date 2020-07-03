import { Request, Response } from 'express';
import { ShowBusiness } from '../business/ShowBusiness';
import { DateValidate } from '../services/DateValidate';
import { ShowDatabase } from '../data/ShowDatabase';
import { IdGenerator } from '../services/idGenerator';
import { tokenAuthenticator } from '../services/tokenAutenticator';

export class ShowController{

    public async createShow(req: Request, res: Response){
        try{
            const showData = {
                token: req.headers.auth,
                week_day: req.body.week_day,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                band_id: req.body.band_id
            };

            const show = await new ShowBusiness().createShow(
                showData,
                new DateValidate,
                new ShowDatabase,
                new IdGenerator,
                new tokenAuthenticator
            );
            
            res.status(200).send({message: "deu bom"});
        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new ShowDatabase().destroyConnection();
    };

    public async getShowByDate(req: Request, res: Response){
        try{
            const data = {
                token: req.headers.auth,
                week_day: req.params.date,
            };

            const show = await new ShowBusiness().getShowByDate(
                data,
                new tokenAuthenticator,
                new ShowDatabase
                );

            res.status(200).send(show);
        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new ShowDatabase().destroyConnection();
    };
};