import { API, HEADERS, dummyUser } from '../../constants/';
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
      return res.json()})
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}

export function favArticle(articleID, userID){
  userID = userID ? userID : dummyUser

  let body = {
    articleID,
    userID
  }

  return (dispatch) => {
    return fetch(API + '/user/favArticle', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => {
      return res.json()})
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}
