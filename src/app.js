'use strict'

import React, { Component } from 'react'
import { ToastContainer } from 'react-toastr'
import moment from 'moment'

import Reservation from 'views/Reservation'

import pricedOut from 'utils/priced-out/'
import toast from 'utils/toast'

import './css/global.sass'

class App extends Component {
  constructor () {
    super()

    this.clearCheck = {
      status: false,
      text: 'Not Selected',
      key: 0,
      monthSelected: 0
    }

    this.state = {
      month: 0,
      checkin: {
        ...this.clearCheck
      },
      checkout: {
        ...this.clearCheck
      },
      checked: false,
      hotels: [],
      showSearch: false,
      filter: {
        price: 100,
        rate: 0,
        max: 600
      }
    }

    this.resetCheck = () => {
      this.setState({
        ...this.state,
        checkin: {
          ...this.clearCheck
        },
        checkout: {
          ...this.clearCheck
        },
        checked: false
      })
    }

    this.handleSearch = () => {
      const url = 'http://www.raphaelfabeni.com.br/rv/hotels.json'

      const dateStart = moment()
        .add(this.state.checkin.monthSelected)
        .set('date', this.state.checkin.key)

      const dateEnd = moment()
        .add(this.state.checkout.monthSelected)
        .set('date', this.state.checkout.key)

      const days = dateEnd.diff(dateStart, 'days') + 1
      let hotels = []

      this.state.checkin.status && this.state.checkout.status
        ? fetch(url)
          .then(data => data.json())
          .then(res => {
            res.hotels.map(item => {
              hotels = [
                ...hotels,
                {
                  ...item,
                  total: item.price * days,
                  showHistory: false
                }
              ]
            })

            this.setState({
              ...this.state,
              hotels,
              showSearch: true,
              filter: {
                price: pricedOut(hotels).low,
                rate: 0,
                max: pricedOut(hotels).high
              }
            })
          })
        : toast(this.container, 'Please, select your dates')
    }

    this.handleDateSelect = (e) => {
      const target = e.target.firstChild.innerHTML || e.target.innerHTML

      const isCurrentMonth = this.state.checkin.monthSelected === this.state.month
      const isSmallerThanCheckin = target < this.state.checkin.key

      if (
        isSmallerThanCheckin &&
        !this.state.checkout.status &&
        isCurrentMonth
      ) {
        toast(this.container, 'Please, select a valid date')
        return null
      }

      const dateString = (month, date) => {
        return moment()
          .add(month, 'month')
          .set('date', date)
          .format('MMMM DD, Y')
      }

      const changeCheckout = () => {
        this.setState({
          ...this.state,
          checkout: {
            status: true,
            text: dateString(this.state.month, target),
            key: parseInt(target),
            monthSelected: this.state.month
          },
          checked: false
        })
      }

      const changeCheckin = () => {
        this.setState({
          ...this.state,
          checkin: {
            status: true,
            text: dateString(this.state.month, target),
            key: parseInt(target),
            monthSelected: this.state.month
          },
          checkout: {
            ...this.clearCheck,
            monthSelected: this.state.month
          },
          checked: true,
          showSearch: false
        })
      }

      !this.state.checked
        ? changeCheckin()
        : changeCheckout()
    }

    this.handleMonthChange = type => () => {
      if (type === 'more') {
        this.setState({
          ...this.state,
          month: this.state.month + 1
        })
      } else {
        this.setState({
          ...this.state,
          month: this.state.month - 1
        })
      }
    }
  }
  render () {
    return (
      <div>
        <ToastContainer
          ref={ref => { this.container = ref }}
          className='toast-top-right'
        />
        <Reservation
          month={this.state.month}
          checkin={this.state.checkin}
          checkout={this.state.checkout}
          hotels={this.state.hotels}
          showSearch={this.state.showSearch}
          filter={this.state.filter}
          handleMonthChange={this.handleMonthChange}
          handleDateSelect={this.handleDateSelect}
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default App
