import {event} from "../types";
import * as fs from "fs";
import * as moment from "moment";

const calendarEvents = require("../../data/calendarEvents.json");

export function createEvent(newEvent:event):void{

    //verifico se tenho todos os argumentos
    if(newEvent.name && newEvent.description && newEvent.dateStart && newEvent.dateEnd){
        
        //verifico se a data é valida
        if(newEvent.dateStart.toString()!=="Invalid date" && newEvent.dateEnd.toString()!=="Invalid date"){
            
            const today:moment.Moment = moment();
            const diffDate = newEvent.dateStart.diff(today);
            const diffStartEnd = newEvent.dateEnd.diff(newEvent.dateStart)
            
            //verifico se o fim é depois do inicio
            if(diffStartEnd>0){
                
                //verifico se o inicio é em data futura
                if(diffDate>=0){
    
                    const aux={
                        name: newEvent.name,
                        description: newEvent.description,
                        dateStart: newEvent.dateStart.format("DD/MM/YYYY, HH:mm"),
                        dateEnd: newEvent.dateEnd.format("DD/MM/YYYY, HH:mm")
                    };
                    
                    const newCalendar = calendarEvents;
    
    
                    newCalendar.filter((event)=>{
                        return event===aux.dateStart
                    })
    
                    //verifico se já existe evento nesta data
                    if(newCalendar[0]===undefined){
                        newCalendar.push(aux);
                    
                        try{
                            fs.writeFileSync(`data/calendarEvents.json`, JSON.stringify(newCalendar));
                            return console.log('Evento criado com sucesso');
                        }catch(error){
                            return console.log(error);
                        };
                        
                    }else{
                        return console.log("Já existe evento para a data selecionada")
                    }
    
    
                }else{
                    return console.log("data anterior ao dia de hoje");
                }
            }else{
                return console.log("Data de termino anterior a data de inicio");
            }



        }else{
            return console.log("Insira uma data valida");
        }
    }else{
       return console.log("Por favor ensira todos os argumentos para criação do evento");
    };
};