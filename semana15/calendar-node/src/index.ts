import * as moment from "moment";
import {event} from "./types";
import {createEvent} from "./services/createEvent";
import {getEvents} from "./services/getEvents";


const newEvent:event={
    name: "Jogar the witcher",
    description: "paradigma de programação",
    dateStart: moment("30/05/2020, 11:40" ,"DD/MM/YYYY, HH:mm"),
    dateEnd: moment("29/06/2020, 12:30" ,"DD/MM/YYYY, HH:mm")
};


// const newEvent:event={
//     name: process.argv[2],
//     description: process.argv[3],
//     dateStart: moment(process.argv[4] ,"DD/MM/YYYY, HH:mm"),
//     dateEnd: moment(process.argv[5] ,"DD/MM/YYYY, HH:mm")
// };


function main(){

    createEvent(newEvent);

    // getEvents();

};

main();