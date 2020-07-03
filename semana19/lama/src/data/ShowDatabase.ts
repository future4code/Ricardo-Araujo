import { BaseDatabase } from "./BaseDatabase";
import { ShowInputDTO, ShowDateInputDTO } from "../dto/ShowDTO";


export class ShowDatabase extends BaseDatabase{

    public async createShow(body: ShowInputDTO){
        await super.getConnection().insert(body)
            .into(BaseDatabase.TABLE_SHOWS);
    };

    public async checkDate(body: ShowDateInputDTO){
        const result = await super.getConnection().raw(
            `SELECT * FROM lama_shows WHERE week_day = "${body.week_day}" 
            AND start_time >= ${body.start_time} AND start_time < ${body.end_time} 
            OR end_time > ${body.start_time} AND  end_time<= ${body.end_time}`);

        return result[0][0];
    };

    public async getShowByDate(date: string){
        const result = await super.getConnection().raw(
            `SELECT * FROM ${BaseDatabase.TABLE_SHOWS} 
            WHERE week_day = "${date}"`);

        return result[0];
    };
};