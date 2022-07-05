export type TStateMother = {
  mother: {
    firstName: string,
    lastName: string,
    email: string
  },
  isAuth: boolean,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,
};

export const stateMother = {
  mother: {
    firstName: '',
    lastName: '',
    email: ''
  },
  isAuth: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,
};
