export default function newsReducer(state = {sources: {}, articles:{}, showSource: {}}, action){
  switch(action.type){

    case "FETCH_SOURCES":
    return {...state, sources: action.sources};

    case "FETCH_HEADLINES":
    return {...state, articles: action.articles}

    case "SHOW_SOURCE":
    return {...state, showSource: action.source}

    case "UNMOUNT_SOURCE":
    return {...state, showSource: {}}

    case "SHOW_ARTICLE":
    return {...state, showArticle: action.article};

    case "UNMOUNT_ARTICLE":
    return {...state, showArticle: {}};

    case "FOUND_SOURCES":
    return {...state, foundSources: action.sources}

    default:
    return state
  }
}
