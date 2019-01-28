import { URL } from '../../constants/Constants';
import { logInUser } from '../actions/user'

export function logIn(body){
  return (dispatch) => {
    return fetch(URL + '/users', {
      method: "GET",
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}

export function signUp(body){
  return (dispatch) => {
    return fetch(URL + '/users', {
      method: "POST",
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      debugger
      dispatch(logInUser(user))
    })
  }
}
