export default function newsReducer(state = {sources: {}, articles:{}}, action){
  switch(action.type){

    case "FETCH_SOURCES":
    return {...state, sources: action.sources};

    case "FETCH_HEADLINES":
    return {...state, articles: action.articles}

    case "SHOW_SOURCE":
    return {...state, showSource: action.source}

    default:
    return state
  }
}
