import { API, HEADERS } from '../../constants';
import {
  fetchSourcesAction,
  fetchArticlesAction,
  showSourceAction
} from '../'

export function fetchSources(){
  return (dispatch) => {
    return fetch(API + '/news/sources', {
      method: "GET",
      headers: HEADERS,
    }).then(res => res.json())
    .then(sources => {
      dispatch(fetchSourcesAction(sources))
    })
  }
}
export function fetchArtilces(){
  return (dispatch) => {
    return fetch(API + '/news/articles', {
      method: "GET",
      headers: HEADERS,
    }).then(res => res.json())
    .then(articles => {
      dispatch(fetchArticlesAction(articles))
    })
  }
}

export function showSource(sourceID){
  console.log(sourceID)
  return (dispatch) => {
    return fetch(API + `/news/sources/${sourceID}`, {
      method: "GET",
      headers: HEADERS,
    }).then(res => res.json())
    .then(source => {
      dispatch(showSourceAction(source))
    })
  }
}
export function showArticle(sourceID){
  return (dispatch) => {
    return fetch(API + `/news/sources/${sourceID}`, {
      method: "GET",
      headers: HEADERS,
    }).then(res => res.json())
    .then(source => {
      dispatch(showSourceAction(source))
    })
  }
}
