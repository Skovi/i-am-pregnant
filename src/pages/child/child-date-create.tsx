import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CREATE_DATE_CHILD_REQUEST,
  CREATE_DATE_CHILD_SUCCESS,
} from '../../services/actions/child/action-type-child';
import './child.scss';

export const ChildDateCreate = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    termOfPregnancy: '',
    firstDayOfLastPeriod: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: CREATE_DATE_CHILD_REQUEST
    });
    dispatch({
      type: CREATE_DATE_CHILD_SUCCESS
    });
  };

  const onSubmitButton = () => {
    console.log('данные обновлены!')
  }
  return (
    <div>
      <h2>Заполните поля, чтобы отвлежить информацию о развитии ребенка.</h2>
      <form>
      <label htmlFor="name">Введите имя малыша</label>
        <input
          className=""
          type='text'
          name='name'
          value={state.name}
          onChange={onChangeInput}
        />
        <label htmlFor="termOfPregnancy">Срок беременности</label>
        <input
          className=""
          type='text'
          name='termOfPregnancy'
          value={state.termOfPregnancy}
          onChange={onChangeInput}
        />
        <label htmlFor="firstDayOfLastPeriod">Первый день последних месячных</label>
        <input
          className=""
          type='text'
          name='firstDayOfLastPeriod'
          value={state.firstDayOfLastPeriod}
          onChange={onChangeInput}
        />
        <fieldset>
        <legend>Если вы уже знаете пол ребенка, можете его указать</legend>
        <div>
          <input
            className=""
            type="radio"
            name="gender"
            value="boy"
            checked
          />
          <label htmlFor="boy">Мальчик</label>
        </div>
        <div>
        <input
          className=""
          type="radio"
          name="gender"
          value="girl"
        />
        <label htmlFor="girl">Девочка</label>
        </div>
        </fieldset>
      </form>
    </div>
  )
};
