'use strict'

import React, { Component } from 'react'
import Reservation from 'views/Reservation'

import moment from 'moment'

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
      showSearch: false
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
                  total: item.price * days
                }
              ]
            })

            this.setState({
              ...this.state,
              hotels,
              showSearch: true
            })
          })
        : alert('Select your Check-in or Check-out')
    }

    this.handleDateSelect = (e) => {
      const target = e.target.firstChild.innerHTML || e.target.innerHTML

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
            ...this.clearCheck
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
      <Reservation
        month={this.state.month}
        checkin={this.state.checkin}
        checkout={this.state.checkout}
        hotels={this.state.hotels}
        showSearch={this.state.showSearch}
        handleMonthChange={this.handleMonthChange}
        handleDateSelect={this.handleDateSelect}
        handleSearch={this.handleSearch}
      />
    )
  }
}

export default App
