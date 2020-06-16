import * as moment from "moment";

export default class Statement{
    operation:string
    date:string
    description:string|number
    constructor(operation:string, description:string|number){
        this.operation = operation
        this.date = moment().format("DD/MM/YYYY, HH:mm:ss");
        this.description = description
    };
};

