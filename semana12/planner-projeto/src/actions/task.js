import axios from "axios";

export const getTasks = () => async (dispatch) =>{
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/generic/planner-darvas`);

    console.log(response.data)
}