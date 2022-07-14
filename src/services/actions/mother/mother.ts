import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { dataMother } from "../../../utils/data";
import { TDispatch, TThunk } from "../../../utils/types";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_DATE_MOTHER_REQUEST,
  UPDATE_DATE_MOTHER_SUCCESS,
  GET_DATE_MOTHER_REQUEST,
  GET_DATE_MOTHER_SUCCESS,
} from "./action-type-mother";

export const register: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    })
  }
};

export const login: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })
  }
};

export const logout: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  }
};

export const updateDateMother: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: UPDATE_DATE_MOTHER_REQUEST,
    })
  }
};

export const getDateMother: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_DATE_MOTHER_REQUEST,
    })
    dispatch({
      type: GET_DATE_MOTHER_SUCCESS,
      mother: {
        firstName: dataMother.mother.firstName,
        lastName: dataMother.mother.lastName,
        email: dataMother.mother.email,
        birthday: dataMother.mother.birthday,
        firstDayOfLastPeriod: dataMother.mother.firstName,
        conceptionDate: dataMother.mother.conceptionDate
      }
    })
  }
};