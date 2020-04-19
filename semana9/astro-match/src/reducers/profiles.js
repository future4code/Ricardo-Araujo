const initialState = {
  profileToSwipe: {},
  matches:[],
  numberOfmatches: 0
}

const profiles = (state = initialState, action) => {
    switch (action.type){
      case "SET_PROFILE_TO_SWIPE":{
        return {...state, profileToSwipe: action.payload.profileToSwipe}
      }
      case "SET_MATCHES":{
        return {...state, matches: action.payload.matches, numberOfmatches: action.payload.matches.length}
      }
      default:
        return state 
    }
}

export default profiles
