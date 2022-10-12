import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { READ_DATE_CHILD_REQUEST, READ_DATE_CHILD_SUCCESS } from '../../services/actions/child/action-type-child';
import { GET_DATE_MOTHER_REQUEST, GET_DATE_MOTHER_SUCCESS } from '../../services/actions/mother/action-type-mother';
import { useSelector } from '../../utils/hooks';
import './main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const { mother } = useSelector((store) => store.mother);
  const { child } = useSelector((store) => store.child);
  const babeSize = (document.getElementById('babeSize') as HTMLInputElement)?.value;

  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    dispatch({
      type: GET_DATE_MOTHER_REQUEST,
    })
    dispatch({
      type: GET_DATE_MOTHER_SUCCESS
    })
    dispatch({
      type: READ_DATE_CHILD_REQUEST,
    })
    dispatch({
      type: READ_DATE_CHILD_SUCCESS
    })
  }, [dispatch]);

  const onOpen = () => {
    setVisible(() => isVisible ? false : true);
  }
  const onClick = () => {
    setVisible(() => isVisible ? false : true);
    return (
      <div className='img-list'>
        
      </div>
    )
  }
  
  return (
    <div className='main-page'>

      <h2>Привет, {mother.name}!</h2>
      <h3>Срок беременности: {child.termOfPregnancy}</h3>
      <h3>Планируемая дата родов: {child.childbirth}</h3>

      <div className='drop-container'>
          <div className="btn btn-size" onClick={onOpen}>
            <span>Посмотреть размеры ребенка</span>
          </div>
      </div>
      {isVisible ? (<ul className='drop-list'>
          <li 
          className='drop-content' 
          onClick={onClick}
          id='asFruits'
          >
            относительно фрукта
            </li>
          <li 
          className='drop-content' 
          onClick={onClick}
          id='asAnimals'
          >
            относительно животного
            </li>
          <li 
          className='drop-content' 
          onClick={onClick}
          id='asSweets'
          >
            относительно сладостей
            </li>
        </ul>) : ''}

    </div>
  )
};
 