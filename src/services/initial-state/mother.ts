export type TStateMother = {
  mother: {
    name: string,
    email: string,
  },
  isAuth: boolean,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,

  getDateMotherRequest: boolean,
  getDateMotherFailed: boolean,

  updateDateMotherRequest: boolean,
  updateDateMotherFailed: boolean,
};

export const stateMother: TStateMother = {
  mother: {
    name: '',
    email: '',
  },
  isAuth: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  getDateMotherRequest: false,
  getDateMotherFailed: false,

  updateDateMotherRequest: false,
  updateDateMotherFailed: false,
};
