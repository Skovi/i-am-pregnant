import {
  IGetDateMotherFailedAction,
  ILoginFailedAction,
  ILogoutFailedAction,
  IRegisterFailedAction,
  IUpdateDateMotherFailedAction,
} from "./action-creator-mother";

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';

export const UPDATE_DATE_MOTHER_REQUEST: 'UPDATE_DATE_MOTHER_REQUEST' = 'UPDATE_DATE_MOTHER_REQUEST';
export const UPDATE_DATE_MOTHER_SUCCESS: 'UPDATE_DATE_MOTHER_SUCCESS' = 'UPDATE_DATE_MOTHER_SUCCESS';

export const GET_DATE_MOTHER_REQUEST: 'GET_DATE_MOTHER_REQUEST' = 'GET_DATE_MOTHER_REQUEST';
export const GET_DATE_MOTHER_SUCCESS: 'GET_DATE_MOTHER_SUCCESS' = 'GET_DATE_MOTHER_SUCCESS';

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  mother: {
    name: string,
    email: string,
  };
}


export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  mother: {
    name: string,
    email: string,
  };
}


export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}


export interface IUpdateDateMotherRequestAction {
  readonly type: typeof UPDATE_DATE_MOTHER_REQUEST;
}
export interface IUpdateDateMotherSuccessAction {
  readonly type: typeof UPDATE_DATE_MOTHER_SUCCESS;
  mother: {
    name: string,
    email: string,
  }
}


export interface IGetDateMotherRequestAction {
  readonly type: typeof GET_DATE_MOTHER_REQUEST;
}
export interface IGetDateMotherSuccessAction {
  readonly type: typeof GET_DATE_MOTHER_SUCCESS;
  mother: {
    name: string,
    email: string,
  }
}





export type TMotherActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IUpdateDateMotherRequestAction
  | IUpdateDateMotherSuccessAction
  | IUpdateDateMotherFailedAction
  | IGetDateMotherRequestAction
  | IGetDateMotherSuccessAction
  | IGetDateMotherFailedAction;
