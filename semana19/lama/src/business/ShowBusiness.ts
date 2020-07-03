import { failureMessage } from "../models/messages";
import { ShowInputDTO, ShowDateInputDTO } from "../dto/ShowDTO";



export class ShowBusiness{

    public async createShow(
        showData: any,
        dateValidate: any,
        ShowDatabase: any,
        idGenerator:any,
        tokenAutenticator:any){

        const user = tokenAutenticator.getData(showData.token);
        if(user.role!== "admin"){
            throw new Error(failureMessage.admin);
        };
            
        const dayValidate = dateValidate.dayValidade(showData.week_day);
        const hourValidade = dateValidate.hourValidade(showData.start_time, showData.end_time);
        
        if(!dayValidate || !hourValidade){
            throw new Error (failureMessage.date);
        };

        const date: ShowDateInputDTO={
            week_day: showData.week_day,
            start_time: showData.start_time,
            end_time: showData.end_time
        };

        const freeDate = await ShowDatabase.checkDate(date);
        if(freeDate){
            throw new Error(failureMessage.free);
        };


        const id = idGenerator.generate();

        const show: ShowInputDTO = {
            id: id,
            week_day: showData.week_day,
            start_time: showData.start_time,
            end_time: showData.end_time,
            band_id: showData.band_id
        };

        await ShowDatabase.createShow(show);
    };


    public async getShowByDate(
        data: any,
        tokenAutenticator: any,
        ShowDatabase: any
    ){

        const autorization = tokenAutenticator.getData(data.token);

        const show = await ShowDatabase.getShowByDate(data.week_day);

        return show;
    };

};