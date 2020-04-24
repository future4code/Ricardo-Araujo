import axios from "axios"

export function getTrips(tripsFromAPI){
    return{
        type: 'GET_TRIPS',
        payload:{
            trips: tripsFromAPI
        }
    } 
}


export const fetchTrips = () => async (dispatch) =>{
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/ricardo-hamilton/trips`
    );
    
    dispatch(getTrips(response.data.trips))
}

export const createTrips = (body, token) => async (dispath) =>{
    await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/ricardo-hamilton/trips`, body, {
            headers:{"auth": token}
        }
    ).then(response =>{
        alert("Viagem criada com sucesso!")
        console.log(response)
    }).catch(error=>{
        alert("Não foi possível cadastrar a viagem");
    })
}