import { API, HEADERS } from '../../constants';
import {fetchSourcesAction} from '../'

export function fetchSources(){
  return (dispatch) => {
    return fetch(API + '/news/sources', {
      method: "GET",
      headers: HEADERS,
    }).then(res => {
      return res.json()})
    .then(news => {
      dispatch(fetchSourcesAction(news))
    })
  }
}
export function fetchArtilces(){
  return (dispatch) => {
    return fetch(API + '/news/articles', {
      method: "GET",
      headers: HEADERS,
    }).then(res => {
      return res.json()})
    .then(news => {
      dispatch(fetchSourcesAction(news))
    })
  }
}
