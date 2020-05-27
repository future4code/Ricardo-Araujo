import axios from 'axios';
import {baseUrl} from "../URLdeBase";
import {getAllSubscribers} from "./exercicio01";

/*
a. ele dispara todas as requisiçoes sem ficar esperando a resposta de cada uma,
garantindo um menor tempo de execução. (paraleliza o processo de envio de requisições)

b. como dito acima, ele vai disparar todas as notificações ao inves de disparar e 
esperar a resposta individual de cada uma.

c. 
*/

export async function sendNotificationPromise (notification: string):Promise<void>{

    const arraySubscribers = await getAllSubscribers();
    const promiseArray: Promise<any>[] = [];

    for (const subscriber of arraySubscribers){
        console.log("enviando mensagem para : ", subscriber.id);
        promiseArray.push(
                axios.post(`${baseUrl}/notifications/send`,{
                    subscriberId: subscriber.id,
                    message: notification
                }).then(()=>{
                    console.log("Mensagem enviada para : ", subscriber.id);
                }).catch((error)=>{
                    console.log(error);
                })
      
        );
    }
    
    await Promise.all(promiseArray);
};