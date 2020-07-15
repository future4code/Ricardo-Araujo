import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase{

    public async createBand(body:any){
        await super.getConnection().insert(body)
            .into(BandDatabase.TABLE_BANDS);
    };

    public async getBandById(id: string){
        const result = await super.getConnection().select("*")
            .into(BaseDatabase.TABLE_BANDS).where({id});

        return result[0];
    };
};