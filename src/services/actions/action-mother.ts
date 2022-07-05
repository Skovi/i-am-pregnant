export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export const UPDATE_DATE_MOTHER: 'UPDATE_DATE_MOTHER' = 'UPDATE_DATE_MOTHER';
export const GET_DATE_MOTHER: 'GET_DATE_MOTHER' = 'GET_DATE_MOTHER';

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  mother: {
    firstName: string,
    lastName: string,
    email: string
  };
}
export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  mother: {
    firstName: string,
    lastName: string,
    email: string
  };
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IUpdateDateMother {
  readonly type: typeof UPDATE_DATE_MOTHER;
}
export interface IGetDateMother {
  readonly type: typeof GET_DATE_MOTHER;
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
  | IUpdateDateMother
  | IGetDateMother;
