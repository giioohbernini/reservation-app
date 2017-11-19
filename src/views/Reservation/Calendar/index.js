import React from 'react'

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
            <button className={style.arrow} onClick={handleMonthChange('less')}>{'<'}</button>
          </div>
          <div className='middle'>
            {`${date.format('MMMM')} / ${date.format('Y')}`}
          </div>
          <div className='right'>
            <button className={style.arrow} onClick={handleMonthChange('more')}>{'>'}</button>
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

export default Calendar
