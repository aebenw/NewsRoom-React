import { API, HEADERS } from '../../constants';
import { fetchSourcesAction, fetchArticlesAction } from '../'

export function fetchSources(){
  return (dispatch) => {
    return fetch(API + '/news/sources', {
      method: "GET",
      headers: HEADERS,
    }).then(res => {
      return res.json()})
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
    }).then(res => {
      return res.json()})
    .then(articles => {
      dispatch(fetchArticlesAction(articles))
    })
  }
}
