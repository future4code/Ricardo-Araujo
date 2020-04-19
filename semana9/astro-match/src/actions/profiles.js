import axios from 'axios'

export function setProfileToSwipe (profileFromAPI){
	return{
		type: 'SET_PROFILE_TO_SWIPE',
		payload:{
			profileToSwipe: profileFromAPI
		}
	}
}

export function setMatches (matchesFromAPI){
	return{
		type: 'SET_MATCHES',
		payload:{
			matches: matchesFromAPI
		}
	}
}

export function infoProfile (nameOfProfile){
	return{
		type:'INFO_PROFILE',
		payload:{
			choosedProfile: nameOfProfile
		}
	}
}

export function closeSnackbar (){
	return{
		type: 'CLOSE_SNACKBAR',
		payload:{
			
		}
	}
}


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/clear')

	alert("Foram limpados todos os Matches e perfis vistos");

	dispatch(getProfileToSwipe());
	dispatch(getMatches());
}

export const getProfileToSwipe =()=> async (dispatch) =>{
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/person`)
	
	dispatch(setProfileToSwipe(response.data.profile));
}

export const chooseProfile = (id, choise) => async (dispatch) =>{
	const body ={
		id: id ,
		choice: choise 
	}
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/choose-person', body);

	dispatch(getProfileToSwipe());
}

export const getMatches = () => async (dispatch) =>{
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ricardo-hamilton/matches')

	dispatch(setMatches(response.data.matches))
}