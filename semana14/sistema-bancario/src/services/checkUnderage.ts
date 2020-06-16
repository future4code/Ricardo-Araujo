import * as moment from "moment";


export function checkUnderage(birthDate):boolean{

    const diffAge: string = moment(birthDate,"DD/MM/YYYY").fromNow();

    const age = Number(diffAge.split(" ")[0]);

    if(age>=18){
        return false;
    }else{
        return true;
    };
};