export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';
export const UPDATE_DATE_MOTHER_FAILED: 'UPDATE_DATE_MOTHER_FAILED' = 'UPDATE_DATE_MOTHER_FAILED';
export const GET_DATE_MOTHER_FAILED: 'GET_DATE_MOTHER_FAILED' = 'GET_DATE_MOTHER_FAILED';

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}
export interface IUpdateDateMotherFailedAction {
  readonly type: typeof UPDATE_DATE_MOTHER_FAILED;
}
export interface IGetDateMotherFailedAction {
  readonly type: typeof GET_DATE_MOTHER_FAILED;
}

export const redisterFailed = (): IRegisterFailedAction => {
  return {
    type: REGISTER_FAILED
  }
};
export const loginFailed = (): ILoginFailedAction => {
  return {
    type: LOGIN_FAILED
  }
};
export const logoutFailed = (): ILogoutFailedAction => {
  return {
    type: LOGOUT_FAILED
  }
};
export const updateDateMotherFailed = (): IUpdateDateMotherFailedAction => {
  return {
    type: UPDATE_DATE_MOTHER_FAILED
  }
};
export const getDateMotherFailed = (): IGetDateMotherFailedAction => {
  return {
    type: GET_DATE_MOTHER_FAILED
  }
};
