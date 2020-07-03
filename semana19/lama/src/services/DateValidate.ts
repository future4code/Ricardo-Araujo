import moment from 'moment';

export class DateValidate{

    private static possibleDay: any = {
        5: "friday", 
        6: "saturday",
        0: "sunday"
    };

    public dayValidade(week_day:string):boolean{

        const day = moment(week_day, "YYYY/MM/DD").day();

        if(DateValidate.possibleDay[day]){
            return true;
        }else{
            return false;
        };

    };

    public hourValidade(start_time: number, end_time: number):boolean{

        if(start_time<8 || start_time>22){
            return false;
        };

        if(end_time<start_time || end_time>23){
            return false;
        };

        const diffHour = end_time-start_time;

        if(diffHour<1){
            return false;
        };

        return true;
    };
};