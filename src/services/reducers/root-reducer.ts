import { combineReducers } from "redux";
import { reducerChild } from './reducer-child';
import { reducerMother } from './reducer-mother';

export const rootReducer = combineReducers({
  child: reducerChild,
  mother: reducerMother,
});
