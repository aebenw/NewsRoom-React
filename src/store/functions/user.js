import { API, HEADERS, dummyUser } from '../../constants/';
import {
  logInUser,
  loginErrorAction,
  signUpErrorAction,
  favArticleAction,
  savedArticlesAction

} from '../'

export function login(body){
  return (dispatch) => {
    return fetch(API + '/user/login', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      if(user.errors){
        dispatch(loginErrorAction(user.errors))
      } else {
        localStorage.setItem("NewsRoomToken", user.token)
        dispatch(logInUser(user.user))
     }
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
      if(user.errors) {
        dispatch(signUpErrorAction(user.errors))
      } else {
        localStorage.setItem("NewsRoomToken", user.token)
        dispatch(logInUser(user.user))
      }
    })
  }
}

export function favArticle(userID, articleID){
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
    }).then(res => res.json())
    .then(response => {
      if(response.success){
        dispatch(favArticleAction(articleID))
      }
    })
  }
}

export function retrieveWithToken(token){
  let body = {token}
  return(dispatch) => {
    return fetch(API + '/user/session', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(user => {
      dispatch(logInUser(user))
    })
  }
}

export function getSavedArticles(articles){
  let body = {articles}
  return(dispatch) => {
    return fetch(API + '/user/articles', {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(articles => {
      dispatch(savedArticlesAction(articles))
    })
  }
}
