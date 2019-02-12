import user from './user';
import news from './news';
import error from './error';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  news,
  error
})
