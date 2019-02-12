import user from './user';
import news from './news';
import errors from './error';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  news,
  errors
})
