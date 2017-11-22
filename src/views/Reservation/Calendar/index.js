import React from 'react'
import PropTypes from 'prop-types'

import leftArrow from './assets/arrow-back.svg'
import rightArrow from './assets/arrow-next.svg'

import dayClass from 'utils/calendar-day'

import style from './style.sass'

const daysOfWeek = ['s', 'm', 't', 'w', 't', 'f', 's']

const Calendar = ({ month, handleMonthChange, handleDateSelect, checkin, checkout, date }) => {
  const className = (value) => dayClass(value, month, checkin, checkout, style)

  return (
    <div className={style.month_calendar}>
      <div className={style.header}>
        <div className={style.title}>
          <div className='left'>
            {checkin.status && !checkout.status
              ? null
              : (
                <button className={style.arrow} onClick={handleMonthChange('less')}>
                  <img src={leftArrow} alt='left arrow' />
                </button>
                )
            }
          </div>
          <div className='middle'>
            {`${date.format('MMMM')} / ${date.format('Y')}`}
          </div>
          <div className='right'>
            <button className={style.arrow} onClick={handleMonthChange('more')}>
              <img src={rightArrow} alt='right arrow' />
            </button>
          </div>
        </div>
        <div className={style.subtitle}>
          {daysOfWeek.map((item, index) => {
            return (
              <li key={index} className={style.dayWeek}>{item}</li>
            )
          })}
        </div>
      </div>
      <div className={style.content}>
        {Array.apply(null, Array(date.set('date', 1).day())).map((item, index) => {
          return (
            <div className={`${style.day} ${style._disabled}`} key={index} />
          )
        })}

        {Array.apply(null, Array(date.daysInMonth())).map((item, index) => {
          return (
            <div className={className(index)} key={index} onClick={handleDateSelect}>
              <span className={style.value}>{index + 1}</span>
              <div className={style.circle} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  checkin: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  handleDateSelect: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired
}

export default Calendar
