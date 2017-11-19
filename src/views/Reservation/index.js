import React from 'react'
import Header from './Header'
import SearchBox from './SearchBox'
import SearchContent from './SearchContent'

import style from './reservation.sass'

const Reservation = ({
  checkin,
  checkout,
  hotels,
  month,
  showSearch,
  handleMonthChange,
  handleDateSelect,
  handleSearch
}) => {
  return (
    <section className='reservation'>
      <Header />
      <section className={style.main_content}>
        <SearchBox
          month={month}
          checkin={checkin}
          checkout={checkout}
          handleMonthChange={handleMonthChange}
          handleDateSelect={handleDateSelect}
          handleSearch={handleSearch}
        />
        <SearchContent
          showSearch={showSearch}
          hotels={hotels}
          checkin={checkin}
          checkout={checkout}
        />
      </section>
    </section>
  )
}

export default Reservation
