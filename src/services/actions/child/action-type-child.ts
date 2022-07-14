export const CREATE_DATE_CHILD_REQUEST: 'CREATE_DATE_CHILD_REQUEST' = 'CREATE_DATE_CHILD_REQUEST';
export const CREATE_DATE_CHILD_SUCCESS: 'CREATE_DATE_CHILD_SUCCESS' = 'CREATE_DATE_CHILD_SUCCESS';

export const READ_DATE_CHILD_REQUEST: 'READ_DATE_CHILD_REQUEST' = 'READ_DATE_CHILD_REQUEST';
export const READ_DATE_CHILD_SUCCESS: 'READ_DATE_CHILD_SUCCESS' = 'READ_DATE_CHILD_SUCCESS';

export const UPDATE_DATE_CHILD_REQUEST: 'UPDATE_DATE_CHILD_REQUEST' = 'UPDATE_DATE_CHILD_REQUEST';
export const UPDATE_DATE_CHILD_SUCCESS: 'UPDATE_DATE_CHILD_SUCCESS' = 'UPDATE_DATE_CHILD_SUCCESS';

export const DELETE_DATE_CHILD_REQUEST: 'DELETE_DATE_CHILD_REQUEST' = 'DELETE_DATE_CHILD_REQUEST';
export const DELETE_DATE_CHILD_SUCCESS: 'DELETE_DATE_CHILD_SUCCESS' = 'DELETE_DATE_CHILD_SUCCESS';

export interface ICreateDateChildRequest {
  readonly type: typeof CREATE_DATE_CHILD_REQUEST;
}
export interface ICreateDateChildSuccess {
  readonly type: typeof CREATE_DATE_CHILD_SUCCESS;
  name: string
  date: number | null,
  gender: string,
  growth: number | null,
  weight: number | null
}
export interface IReadDateChildRequest {
  readonly type: typeof READ_DATE_CHILD_REQUEST;
}
export interface IReadDateChildSuccess {
  readonly type: typeof READ_DATE_CHILD_SUCCESS;
}
export interface IUpdateDateChildRequest {
  readonly type: typeof UPDATE_DATE_CHILD_REQUEST;
}
export interface IUpdateDateChildSuccess {
  readonly type: typeof UPDATE_DATE_CHILD_SUCCESS;
  name: string
  date: number | null,
  gender: string,
  growth: number | null,
  weight: number | null
}
export interface IDeleteDateChildRequest {
  readonly type: typeof DELETE_DATE_CHILD_REQUEST;
}
export interface IDeleteDateChildSuccess {
  readonly type: typeof DELETE_DATE_CHILD_SUCCESS;
}

export type TChildActions =
  | ICreateDateChildRequest
  | ICreateDateChildSuccess
  | IReadDateChildRequest
  | IReadDateChildSuccess
  | IUpdateDateChildRequest
  | IUpdateDateChildSuccess
  | IDeleteDateChildRequest
  | IDeleteDateChildSuccess;
