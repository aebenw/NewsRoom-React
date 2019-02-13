export default function newsReducer(state = {sources: {}, articles:{}}, action){
  switch(action.type){

    case "FETCH_SOURCES":
    return {...state, sources: action.sources};

    case "FETCH_HEADLINES":
    return {...state, articles: action.articles}

    case "SHOW_SOURCE":
    return {...state, showSource: action.source}

    case "SHOW_ARTICLE":
    return {...state, showArticle: action.article};

    case "FOUND_SOURCES":
    console.log(action)
    return {...state, foundSources: action.sources}

    default:
    return state
  }
}
