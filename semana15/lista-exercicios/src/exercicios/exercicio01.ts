import axios from 'axios';
import {subscriber} from "../types";
import {baseUrl} from "../URLdeBase";

/*
a. GET /subscribers/all

b. any

c.
*/


export async function getAllSubscribers (): Promise<subscriber[]>{
    const allSubscribersResult = await axios.get(`${baseUrl}/subscribers/all`);

    return allSubscribersResult.data.map((response:any)=>{
        return{
            id: response.id,
            name: response.name,
            email: response.email
        };
    });
};