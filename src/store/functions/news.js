import { API, HEADERS } from '../../constants';
import {
  fetchSourcesAction,
  fetchArticlesAction,
  showSourceAction,
  showArticleAction,
  foundSources
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
export function showArticle(articleID){
  return (dispatch) => {
    return fetch(API + `/news/articles/${articleID}`, {
      method: "GET",
      headers: HEADERS,
    }).then(res => res.json())
    .then(article => {
      dispatch(showArticleAction(article))
    })
  }
}


export function searchSources(source){
  console.log(source)
  return (dispatch) => {
    return fetch(API + '/news/sources/search', {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(source)
    }).then(res => res.json())
    .then(sources => {
      console.log(sources)
      dispatch(foundSources(sources))
    })
  }
}
