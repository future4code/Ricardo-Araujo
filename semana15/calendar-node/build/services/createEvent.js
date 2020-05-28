"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const fs = require("fs");
const moment = require("moment");
const calendarEvents = require("../../data/calendarEvents.json");
function createEvent(newEvent) {
    if (newEvent.name && newEvent.description && newEvent.dateStart && newEvent.dateEnd) {
        if (newEvent.dateEnd.toString() !== "Invalid date") {
            const today = moment();
            const diffDate = newEvent.dateStart.diff(today);
            const diffStartEnd = newEvent.dateEnd.diff(newEvent.dateStart);
            if (diffStartEnd > 0) {
                if (diffDate >= 0) {
                    const aux = {
                        name: newEvent.name,
                        description: newEvent.description,
                        dateStart: newEvent.dateStart.format("DD/MM/YYYY, HH:mm"),
                        dateEnd: newEvent.dateEnd.format("DD/MM/YYYY, HH:mm")
                    };
                    const newCalendar = calendarEvents;
                    newCalendar.filter((event) => {
                        return event === aux.dateStart;
                    });
                    if (newCalendar[0] === undefined) {
                        newCalendar.push(aux);
                        try {
                            fs.writeFileSync(`data/calendarEvents.json`, JSON.stringify(newCalendar));
                            return console.log('Evento criado com sucesso');
                        }
                        catch (error) {
                            return console.log(error);
                        }
                        ;
                    }
                    else {
                        return console.log("Já existe evento para a data selecionada");
                    }
                }
                else {
                    return console.log("data anterior ao dia de hoje");
                }
            }
            else {
                return console.log("Data de termino anterior a data de inicio");
            }
        }
        else {
            return console.log("Insira uma data valida");
        }
    }
    else {
        return console.log("Por favor ensira todos os argumentos para criação do evento");
    }
    ;
}
exports.createEvent = createEvent;
;
//# sourceMappingURL=createEvent.js.map