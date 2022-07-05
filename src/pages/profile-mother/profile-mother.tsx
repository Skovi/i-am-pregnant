import React, { forwardRef, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import { format } from "util";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import './profile-mother.scss';

type TProps = {
  value: string,
};

export const ProfileMother = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  const years = range(2021, getYear(today) + 2, 1);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return (
    <div className='container'>
      <h2>Профиль мамы</h2>
      {/* <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        minDate={addDays(today, -300)}
        maxDate={addDays(today, 300)}
        placeholderText="Укажите дату зачатия"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      /> */}
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(+value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  )
};

  //Include date intervals
  //Min date
  //Specific date range
  //Year dropdown
  //Year select dropdown

