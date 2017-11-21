import React from 'react'
import PropTypes from 'prop-types'

import leftArrow from './assets/arrow-back.svg'
import rightArrow from './assets/arrow-next.svg'

import style from './style.sass'

const daysOfWeek = ['s', 'm', 't', 'w', 't', 'f', 's']

const Calendar = ({ month, handleMonthChange, handleDateSelect, checkin, checkout, date }) => {
  const dayClass = (value) => {
    const day = value + 1
    const validateMonthIn = month === checkin.monthSelected
    const validateMonthOut = month === checkout.monthSelected

    if (day === checkin.key && validateMonthIn) {
      return `${style.day} ${style._firstactive}`
    } else if (day === checkout.key && validateMonthOut) {
      return `${style.day} ${style._lastactive}`
    } else if (day > checkin.key && day < checkout.key && validateMonthIn) {
      return `${style.day} ${style._active}`
    } else if (day < checkin.key && validateMonthIn && !checkout.status) {
      return `${style.day} ${style._smallDate}`
    }
    return style.day
  }

  return (
    <div className={style.month_calendar}>
      <div className={style.header}>
        <div className={style.title}>
          <div className='left'>
            <button className={style.arrow} onClick={handleMonthChange('less')}>
              <img src={leftArrow} alt='left arrow' />
            </button>
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
            <div className={dayClass(index)} key={index} onClick={handleDateSelect}>
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
