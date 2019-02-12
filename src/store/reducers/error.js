export default function errorReducer(state = {}, action){
  switch(action.type){
    case "LOGIN_ERROR":
    return {...state, loginErrors: action.errors};

    case "SIGNUP_ERROR":
    return {...state, signUpErrors: action.errors};

    default:
    return state
  }
}
