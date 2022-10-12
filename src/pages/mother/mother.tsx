import React, { forwardRef, useRef, useState } from "react";
import './mother.scss';
import { useSelector } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import {
  UPDATE_DATE_MOTHER_REQUEST,
  UPDATE_DATE_MOTHER_SUCCESS,
} from "../../services/actions/mother/action-type-mother";

type TProps = {
  value: string,
};

export const Mother = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((store) => store.mother.mother);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newDataMother = {
      name: state.name !== name ? state.name : name,
      email: state.email !== email ? state.email : email,
      password: state.password,
    };

    // dispatch(updateDateMother(newDataMother));
    dispatch({
      type: UPDATE_DATE_MOTHER_REQUEST
    });
    dispatch({
      type: UPDATE_DATE_MOTHER_SUCCESS
    });
  };

  const onSubmitButton = () => {
    console.log('данные обновлены!')
  }

  return (
    <div className='container'>
      <h2>Здесь вы можете изменить ваши персональные данные</h2>
      <form onSubmit={onSubmitForm}>
        <input
          className="input"
          type='text'
          name='name'
          value={name ? name : state.name}
          onChange={onChangeInput}
        />
        <input
          className=""
          type='text'
          name='email'
          value={email ? email : state.email}
          onChange={onChangeInput}
        />
        <input
          className=""
          type='text'
          name='password'
          value={state.password}
          onChange={onChangeInput}
        />
      </form>
      <button
      className="btn-submut submut" 
      onClick={onSubmitButton}
      >
        Сохранить
        </button>
    </div>
  )
};

