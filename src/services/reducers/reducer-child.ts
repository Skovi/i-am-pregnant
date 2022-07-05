import { 
  TChildActions,
  CREATE_DATE_CHILD,
  READ_DATE_CHILD,
  UPDATE_DATE_CHILD,
  DELETE_DATE_CHILD
 } from "../actions/action-child";
import { stateChild } from "../initial-state/child";

export const reducerChild = (state = stateChild, action: TChildActions) => {
  switch (action.type) {
    case CREATE_DATE_CHILD: {
      return {
        ...state,
      };
    }
    case READ_DATE_CHILD: {
      return {
        ...state,
      };
    }
    case UPDATE_DATE_CHILD: {
      return {
        ...state,
      };
    }
    case DELETE_DATE_CHILD: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
