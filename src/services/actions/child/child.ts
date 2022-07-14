import { TDispatch, TThunk } from "../../../utils/types";
import { CREATE_DATE_CHILD_REQUEST, DELETE_DATE_CHILD_REQUEST, READ_DATE_CHILD_REQUEST, UPDATE_DATE_CHILD_REQUEST } from "./action-type-child";

export const createDateChild: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: CREATE_DATE_CHILD_REQUEST
    })
  }
};

export const readDateChild: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: READ_DATE_CHILD_REQUEST
    })
  }
};

export const updateDateChild: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: UPDATE_DATE_CHILD_REQUEST
    })
  }
};

export const deleteDateChild: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: DELETE_DATE_CHILD_REQUEST
    })
  }
};