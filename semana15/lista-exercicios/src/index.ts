import {getAllSubscribers} from "./exercicios/exercicio01";
import {getAllSubscribersArrow} from "./exercicios/exercicio02";
import {createNews} from "./exercicios/exercicio04";
import {bodyNews} from "./types";
import {sendNotification} from "./exercicios/exercicio05";
import {sendNotificationPromise} from "./exercicios/exercicio06"

console.log("hello world");

async function main(){

    try{
        // //exercicio01
        // console.log(await getAllSubscribers());

        // //exercicio02
        // console.log(await getAllSubscribersArrow());

        // //exercicio04
        // const newNews: bodyNews ={
        //     title: "Chikorita",
        //     content: "é o melhor pokemon inicial do tipo grama",
        //     date: 1589818936000
        // };

        // await createNews(newNews);


        // //exercicio05
        // sendNotification("Testando enviar notificação");

        // //exercicio06
        // await sendNotificationPromise("notificação com Promise.all");

        

    }catch(error){
        console.log(error);
    }

};

main();