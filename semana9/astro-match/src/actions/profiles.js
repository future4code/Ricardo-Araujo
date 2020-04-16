import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/clear')
}

export const getProfileToSwipe =()=> async (dispatch) =>{
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/person`)

	console.log (response.data.profile);
}