export default function userReducer(state = {}, action){
  switch(action.type){
    case "LOGIN_ERROR":
    return {...state, loginErrors: action.errors};

    default:
    return state
  }
}
