import {getAllSubscribers} from "./exercicios/exercicio01";
import {getAllSubscribersArrow} from "./exercicios/exercicio02";
import {createNews} from "./exercicios/exercicio04";
import {bodyNews, user} from "./types";
import {sendNotification} from "./exercicios/exercicio05";
import {sendNotificationPromise} from "./exercicios/exercicio06";
import {createSubscriber, createAndSendNotifications, getAllNotifications} from "./exercicios/exercicio07";

console.log("hello world");

const newNews: bodyNews ={
    title: "Chikorita",
    content: "é o melhor pokemon inicial do tipo grama",
    date: 1589818936000
};

const newUser: user={
    name: "Doutor NodeJS",
    email: "dinokiller@bol.com.br"
}

async function main(){

    try{
        // //exercicio01
        // console.log(await getAllSubscribers());

        // //exercicio02
        // console.log(await getAllSubscribersArrow());

        // //exercicio04


        // await createNews(newNews);


        // //exercicio05
        // sendNotification("Testando enviar notificação");

        // //exercicio06
        // await sendNotificationPromise("notificação com Promise.all");


        // //exercicio07


        // createSubscriber(newUser);

        // createAndSendNotifications(newNews, "testando denovo notificação do exercicio 7")

        getAllNotifications();

    }catch(error){
        console.log(error);
    }

};

main();