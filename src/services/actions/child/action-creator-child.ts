export const CREATE_DATE_CHILD_FAILED: 'CREATE_DATE_CHILD_FAILED' = 'CREATE_DATE_CHILD_FAILED';
export const READ_DATE_CHILD_FAILED: 'READ_DATE_CHILD_FAILED' = 'READ_DATE_CHILD_FAILED';
export const UPDATE_DATE_CHILD_FAILED: 'UPDATE_DATE_CHILD_FAILED' = 'UPDATE_DATE_CHILD_FAILED';
export const DELETE_DATE_CHILD_FAILED: 'DELETE_DATE_CHILD_FAILED' = 'DELETE_DATE_CHILD_FAILED';

export interface ICreateDateChildFailed {
  readonly type: typeof CREATE_DATE_CHILD_FAILED;
}
export interface IReadDateChildFailed {
  readonly type: typeof READ_DATE_CHILD_FAILED;
}
export interface IUpdateDateChildFailed {
  readonly type: typeof UPDATE_DATE_CHILD_FAILED;
}
export interface IDeleteDateChildFailed {
  readonly type: typeof DELETE_DATE_CHILD_FAILED;
}

export const createDateChildFailed = (): ICreateDateChildFailed => {
  return {
    type: CREATE_DATE_CHILD_FAILED
  }
};
export const readDateChildFailed = (): IReadDateChildFailed => {
  return {
    type: READ_DATE_CHILD_FAILED
  }
};
export const updateDateChildFailed = (): IUpdateDateChildFailed => {
  return {
    type: UPDATE_DATE_CHILD_FAILED
  }
};
export const deleteDateChildFailed = (): IDeleteDateChildFailed => {
  return {
    type: DELETE_DATE_CHILD_FAILED
  }
};
