// 
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  READ_DATE_CHILD_REQUEST,
  READ_DATE_CHILD_SUCCESS,
} from '../../services/actions/child/action-type-child';
import { useSelector } from '../../utils/hooks';
import { ChildDateCreate } from './child-date-create';
import { ChildDateRead } from './child-date-read';
import './child.scss';

export const Child = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: READ_DATE_CHILD_REQUEST,
    })
    dispatch({
      type: READ_DATE_CHILD_SUCCESS
    })
  }, [dispatch]);

  const { child } = useSelector((store) => store.child);

  return (
    <>
    { child.childbirth ? <ChildDateRead child={child} /> : <ChildDateCreate /> }
    </>
  )
};
