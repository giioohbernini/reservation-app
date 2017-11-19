import React from 'react'
import Button from 'components/Button'
import Calendar from '../Calendar/'
import moment from 'moment'

import style from './SearchBox.sass'

const SearchBox = ({
  month,
  checkin,
  checkout,
  handleMonthChange,
  handleDateSelect,
  handleSearch
}) => {
  const date = moment().add(month, 'month')

  return (
    <div className={style.search_box}>
      <h2 className={style.titlebox}>Select the dates to stay in Charlotte</h2>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.leftcontainer}>
            <div className={style.checkio}>
              <p className={style.title}>Check-In</p>
              <p className={style.subtitle}>{checkin.text}</p>
            </div>
            <div className={style.checkio}>
              <p className={style.title}>Check-Out</p>
              <p className={style.subtitle}>{checkout.text}</p>
            </div>
            <Button onClick={handleSearch} color='orange' borderSize='2'>Search hotels</Button>
          </div>
        </div>
        <div className={style.right}>
          <Calendar
            month={month}
            checkin={checkin}
            checkout={checkout}
            handleMonthChange={handleMonthChange}
            handleDateSelect={handleDateSelect}
            date={date}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBox
