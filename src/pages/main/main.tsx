import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_DATE_MOTHER_REQUEST, GET_DATE_MOTHER_SUCCESS } from '../../services/actions/mother/action-type-mother';
import { useSelector } from '../../utils/hooks';
import './main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const { mother } = useSelector((store) => store.mother);

  useEffect(() => {
    dispatch({
      type: GET_DATE_MOTHER_REQUEST,
    })
    dispatch({
      type: GET_DATE_MOTHER_SUCCESS
    })
  }, [dispatch])
  return (
    <div>
      Привет, {mother.firstName}
    </div>
  )
};
