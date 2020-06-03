import axios from 'axios';
import {baseUrl} from "../URLdeBase";
import {user} from "../types";
import {createNews} from "./exercicio04";
import {bodyNews} from "../types";
import {sendNotificationPromise} from "./exercicio06";
import {getAllSubscribers} from "./exercicio01";

//a.
export async function createSubscriber (body:user):Promise<void>{

    await axios.put(`${baseUrl}/subscribers`,body).then(()=>{
        console.log("usuario cadastrado com sucesso");
    }).catch((error)=>{
        console.log(error);
    });

};

export async function createAndSendNotifications(body: bodyNews, notification:string){

    await createNews(body).then(async ()=>{
        await sendNotificationPromise(notification);
    }).catch((error)=>{
        console.log(error)
    })
}

export async function getAllNotifications():Promise<void>{
    const allSubscribers = await getAllSubscribers();
    const allNotifications: Promise<any>[] = [];

    for(const subscriber of allSubscribers){
        allNotifications.push(
            axios.get(`${baseUrl}/subscribers/${subscriber.id}/notifications/all`
            ).catch((error)=>console.log(error))
        );
    };

    return console.log(await Promise.all(allNotifications));
};