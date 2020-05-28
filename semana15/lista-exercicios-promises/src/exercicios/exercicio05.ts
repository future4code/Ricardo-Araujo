import axios from 'axios';
import {baseUrl} from "../URLdeBase";
import {getAllSubscribers} from "../exercicios/exercicio01";

/*
a. o forEach por ser um método de array não funciona muito bem com await,
sendo assim ele tera um comportamento estranho.

b. 
*/

export async function sendNotification (notification: string):Promise<void>{

    const arraySubscribers = await getAllSubscribers();

    for (const subscriber of arraySubscribers){
        console.log("enviando mensagem para : ", subscriber.id);
        try{
            await axios.post(`${baseUrl}/notifications/send`,{
                subscriberId: subscriber.id,
                message: notification
            });
            console.log("Mensagem enviada para : ", subscriber.id);
        }catch(error){
            console.log(error);
        }
    };
    console.log("todas as notificações foram enviadas");
};