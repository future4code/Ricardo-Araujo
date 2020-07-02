import { failureMessage } from "../models/messages";
import { createBandInputDTO } from "../dto/BandsDTO";


export class BandBusiness{

    public async createBand(
        bandData: any,
        tokenAuthenticator: any,
        idGenerator: any,
        BandDatabase:any
    ):Promise<any>{

        const getData = tokenAuthenticator.getData(bandData.token);

        if(getData.role!=="admin"){
            throw new Error(failureMessage.admin);
        };

        const id = idGenerator.generate();

        const band:createBandInputDTO = {
            id: id,
            name: bandData.name,
            music_genre: bandData.music_genre,
            responsible: bandData.responsible
        };

        await BandDatabase.createBand(band);
    };
};