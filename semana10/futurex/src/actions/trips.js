import axios from "axios"

export function getTrips(tripsFromAPI){
    return{
        type: 'GET_TRIPS',
        payload:{
            trips: tripsFromAPI
        }
    } 
}

export function setTrip(tripId){
    return{
        type: 'SET_TRIP',
        payload:{
            tripId: tripId
        }
    }
}

export function setTripDetail(tripDetailFromAPI){
    return{
        type: 'SET_TRIP_DETAIL',
        payload:{
            details: tripDetailFromAPI
        }
    }
}

export const fetchTrips = () => async (dispatch) =>{
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/ricardo-hamilton/trips`
    );
    dispatch(getTrips(response.data.trips))
}

export const createTrips = (body, token) => async (dispatch) =>{
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

export const getTripDetail = (tripId , token) => async (dispatch) =>{
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/ricardo-hamilton/trip/${tripId}`,{
            headers:{"auth": token}
        }
    )
    dispatch(setTripDetail(response.data.trip))
}

export const decideCandidate = (tripId, approve, token) => async (dispatch) =>{
    const body={
        approve: approve
    }
    axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/trips/${tripId}/candidates/ricardo-hamilton/decide`, body, {
            headers:{"auth": token},
        }
    )
    console.log("cheguei na action")
}