export default function userReducer(state = {currentUser: {}}, action){
  switch(action.type){
    case "LOGIN":
    return {...state, currentUser: action.user};

    case "FAV_ARTICLE":
    let copy = [...state.currentUser.articles, action.article]
    return {...state, currentUser: {...state.currentUser, articles: copy}};

    case "SAVED_ARTICLES":
    console.log(action)
    return {...state, currentUser: {...state.currentUser, savedArticles: action.articles}};

    default:
    return state
  }
}
