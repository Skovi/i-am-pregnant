import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TChildActions } from "../services/actions/child/action-type-child";
import { TMotherActions } from "../services/actions/mother/action-type-mother";
import { rootReducer } from "../services/reducers/root-reducer";
import { store } from "../services/store";

export type RootState = ReturnType<typeof rootReducer>;
type TApplicationActions =
  | TMotherActions
  | TChildActions;

export type TDispatch = typeof store.dispatch;

export type TThunk<TReturn = void> = ActionCreator<
  ThunkAction<
    TReturn,
    Action,
    RootState,
    TApplicationActions
  >
>;