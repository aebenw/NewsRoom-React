import { API, HEADERS } from '../../constants/';
import { logInUser } from '../'

export function login(body){
  return (dispatch) => {
    return fetch(API + '/user/login', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}

export function signUp(body){
  return (dispatch) => {
    return fetch(API + '/user', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => {
      // debugger
      return res.json()})
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}
