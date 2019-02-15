export default function userReducer(state = {currentUser: {}}, action){
  switch(action.type){
    case "LOGIN":
    return {...state, currentUser: action.user};

    case "LOGOUT":
    return {...state, currentUser: {}}

    case "FAV_ARTICLE":
    let copy = [...state.currentUser.articles, action.article]
    return {...state, currentUser: {...state.currentUser, articles: copy}};

    case "SAVED_ARTICLES":
    return {...state, currentUser: {...state.currentUser, savedArticles: action.articles}};

    default:
    return state
  }
}
