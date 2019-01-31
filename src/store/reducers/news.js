export default function newsReducer(state = {sources: {}, articles:{}}, action){
  switch(action.type){

    case "FETCH_SOURCES":
    return {...state, sources: action.sources.sources};

    case "FETCH_HEADLINES":
    return {...state, articles: action.articles.articles}

    default:
    return state
  }
}
