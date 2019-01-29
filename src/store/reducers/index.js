import user from './user';
import news from './news';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  news
})
