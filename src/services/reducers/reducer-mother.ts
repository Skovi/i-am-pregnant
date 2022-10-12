import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  TMotherActions,
  GET_DATE_MOTHER_REQUEST,
  GET_DATE_MOTHER_SUCCESS,
  UPDATE_DATE_MOTHER_REQUEST,
  UPDATE_DATE_MOTHER_SUCCESS,
} from "../actions/mother/action-type-mother";
import {
  REGISTER_FAILED,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  GET_DATE_MOTHER_FAILED,
  UPDATE_DATE_MOTHER_FAILED,
} from "../actions/mother/action-creator-mother";
import { stateMother, TStateMother } from "../initial-state/mother";
import { dataMother } from "../../utils/data";

export const reducerMother = (state = stateMother, action: TMotherActions): TStateMother => {
  switch (action.type) {

    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        mother: {
          name: dataMother.mother.name,
          email: dataMother.mother.email,
        },
        isAuth: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }

    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isAuth: true,
        mother: {
          name: dataMother.mother.name,
          email: dataMother.mother.email,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutFailed: false,
        logoutRequest: false,
        mother: {
          name: '',
          email: '',
        },
        isAuth: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
      };
    }
    case GET_DATE_MOTHER_REQUEST: {
      return {
        ...state,
        getDateMotherRequest: true,
        getDateMotherFailed: false,
      }
    }
    case GET_DATE_MOTHER_SUCCESS: {
      return {
        ...state,
        getDateMotherRequest: false,
        getDateMotherFailed: false,
        mother: {
          name: dataMother.mother.name,
          email: dataMother.mother.email,
        },
        isAuth: true,
      }
    }
    case GET_DATE_MOTHER_FAILED: {
      return {
        ...state,
        getDateMotherRequest: false,
        getDateMotherFailed: true,
        isAuth: false,
      }
    }
    case UPDATE_DATE_MOTHER_REQUEST: {
      return {
        ...state,
        getDateMotherRequest: false,
        getDateMotherFailed: true,
      }
    }
    case UPDATE_DATE_MOTHER_SUCCESS: {
      return {
        ...state,
        getDateMotherRequest: false,
        getDateMotherFailed: true,
        mother: {
          name: dataMother.mother.name,
          email: dataMother.mother.email,
        },
      }
    }
    case UPDATE_DATE_MOTHER_FAILED: {
      return {
        ...state,
        getDateMotherRequest: false,
        getDateMotherFailed: true,
      }
    }
    default: {
      return state;
    }
  }
};
