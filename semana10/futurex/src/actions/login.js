import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const login = (email, password) => async (dispatch) =>{
    const body = {
        email,
        password
    }
    try{
        const response = await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/ricardo-hamilton/login`,body
    )
        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.publicTrips))

    } catch(error){
        alert("Erro ao realizar o login, tente outra vez")
    }
}