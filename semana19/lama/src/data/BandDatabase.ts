import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase{

    public async createBand(body:any){
        await super.getConnection().insert(body)
            .into(BandDatabase.TABLE_BANDS);
    };


};