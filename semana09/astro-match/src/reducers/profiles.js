const initialState = {
  profileToSwipe: {},
  matches:[],
  numberOfmatches: 0,
  newMatch: false,
  choosedProfile: "undefined"
}

const profiles = (state = initialState, action) => {
    switch (action.type){
      case "SET_PROFILE_TO_SWIPE":{
        return {...state, profileToSwipe: action.payload.profileToSwipe}
      }
      case "SET_MATCHES":{
        if(action.payload.matches.length> state.numberOfmatches){
          return {...state, matches: action.payload.matches, 
                            numberOfmatches: action.payload.matches.length,
                            newMatch: true}
        }else{
          return {...state, matches: action.payload.matches, 
                            numberOfmatches: action.payload.matches.length, 
                            newMatch: false}
        }
      }
      case "INFO_PROFILE":{
        return {...state, choosedProfile: action.payload.choosedProfile}
      }
      case "CLOSE_SNACKBAR":{
        return{...state, newMatch: false}
      }
      default:
        return state 
    }
}

export default profiles
