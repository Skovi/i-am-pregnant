import {
  TChildActions,
  CREATE_DATE_CHILD_REQUEST,
  CREATE_DATE_CHILD_SUCCESS,
  READ_DATE_CHILD_REQUEST,
  READ_DATE_CHILD_SUCCESS,
  UPDATE_DATE_CHILD_REQUEST,
  UPDATE_DATE_CHILD_SUCCESS,
  DELETE_DATE_CHILD_REQUEST,
  DELETE_DATE_CHILD_SUCCESS,
} from "../actions/child/action-type-child";
import {
  CREATE_DATE_CHILD_FAILED,
  READ_DATE_CHILD_FAILED,
  UPDATE_DATE_CHILD_FAILED,
  DELETE_DATE_CHILD_FAILED
} from '../actions/child/action-creator-child';
import { stateChild, TStateChild } from "../initial-state/child";
import { dataChild } from "../../utils/data";

export const reducerChild = (state = stateChild, action: TChildActions): TStateChild => {
  switch (action.type) {
    case CREATE_DATE_CHILD_REQUEST: {
      return {
        ...state,
        createDateChildRequest: true,
        createDateChildFailed: false,
      };
    }
    case CREATE_DATE_CHILD_SUCCESS: {
      return {
        ...state,
        createDateChildRequest: false,
        createDateChildFailed: true,
        child: {
          name: dataChild.child.name,
          date: dataChild.child.date,
          gender: dataChild.child.gender,
          length: dataChild.child.length,
          weight: dataChild.child.weight,
          sizeComparableTo: {
            asFruits: dataChild.child.sizeComparableTo.asFruits,
            asAnimals: dataChild.child.sizeComparableTo.asAnimals,
            asSweets: dataChild.child.sizeComparableTo.asSweets
          }
        }
      };
    }
    case READ_DATE_CHILD_REQUEST: {
      return {
        ...state,
        readDateChildRequest: true,
        readDateChildFailed: false,
      };
    }
    case READ_DATE_CHILD_SUCCESS: {
      return {
        ...state,
        readDateChildRequest: false,
        readDateChildFailed: true,
        child: {
          name: dataChild.child.name,
          date: dataChild.child.date,
          gender: dataChild.child.gender,
          length: dataChild.child.length,
          weight: dataChild.child.weight,
          sizeComparableTo: {
            asFruits: dataChild.child.sizeComparableTo.asFruits,
            asAnimals: dataChild.child.sizeComparableTo.asAnimals,
            asSweets: dataChild.child.sizeComparableTo.asSweets
          }
        }
      };
    }
    case UPDATE_DATE_CHILD_REQUEST: {
      return {
        ...state,
        updateDateChildRequest: true,
        updateDateChildFailed: false,
      };
    }
    case UPDATE_DATE_CHILD_SUCCESS: {
      return {
        ...state,
        updateDateChildRequest: false,
        updateDateChildFailed: true,
        child: {
          name: dataChild.child.name,
          date: dataChild.child.date,
          gender: dataChild.child.gender,
          length: dataChild.child.length,
          weight: dataChild.child.weight,
          sizeComparableTo: {
            asFruits: dataChild.child.sizeComparableTo.asFruits,
            asAnimals: dataChild.child.sizeComparableTo.asAnimals,
            asSweets: dataChild.child.sizeComparableTo.asSweets
          }
        }
      };
    }
    case DELETE_DATE_CHILD_REQUEST: {
      return {
        ...state,
        deleteDateChildRequest: true,
        deleteDateChildFailed: false,
      };
    }
    case DELETE_DATE_CHILD_SUCCESS: {
      return {
        ...state,
        deleteDateChildRequest: false,
        deleteDateChildFailed: true,
        child: {
          name: '',
          date: '',
          gender: '',
          length: null,
          weight: null,
          sizeComparableTo: {
            asFruits: '',
            asAnimals: '',
            asSweets: ''
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};
