export const CREATE_DATE_CHILD: 'CREATE_DATE_CHILD' = 'CREATE_DATE_CHILD';
export const READ_DATE_CHILD: 'READ_DATE_CHILD' = 'READ_DATE_CHILD';
export const UPDATE_DATE_CHILD: 'UPDATE_DATE_CHILD' = 'UPDATE_DATE_CHILD';
export const DELETE_DATE_CHILD: 'DELETE_DATE_CHILD' = 'DELETE_DATE_CHILD';

export interface ICreateDateChild {
  readonly type: typeof CREATE_DATE_CHILD;
}
export interface IReadDateChild {
  readonly type: typeof READ_DATE_CHILD;
}
export interface IUpdateDateChild {
  readonly type: typeof UPDATE_DATE_CHILD;
}
export interface IDeleteDateChild {
  readonly type: typeof DELETE_DATE_CHILD;
}

export type TChildActions =
  | ICreateDateChild
  | IReadDateChild
  | IUpdateDateChild
  | IDeleteDateChild;
  