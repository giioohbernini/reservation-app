import React, { Component } from 'react'
import Card from '../Card'

import style from './SearchContent.sass'

class SearchContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchedHotels: this.props.hotels,
      rangeValue: 100
    }

    this.handleRangeChange = e => {
      this.setState({
        ...this.state,
        rangeValue: e.target.value
      })
    }
  }

  render () {
    if (!this.props.showSearch) return null
    return (
      <div className={style.search_content}>
        <div className={style.header}>
          <h2>Best choices {this.props.checkin.text} and {this.props.checkout.text}</h2>
        </div>
        <div className={style.wrapper}>
          <div className={style.filters}>
            <div className={style.filter_content}>
              <p className={style.title}>Filters</p>
              <label className={style.label}>Price Range</label>
              <div className={style.slider}>
                <input
                  className={style.range_slider}
                  type='range'
                  min='100'
                  max='600'
                  onChange={this.handleRangeChange}
                  value={this.state.rangeValue}
                />
              </div>
              <div className={style.values}>
                <div className={style.min}>
                  <p className={style.label}>Min</p>
                  <p className={style.price}>$100</p>
                </div>
                <div className={style.max}>
                  <p className={style.label}>Max</p>
                  <p className={style.price}>$600</p>
                </div>
              </div>
              <div className={style.stars}>
                <p className={style.label}>Stars</p>
              </div>
            </div>
          </div>
          <div className={style.card_box}>
            <Card />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchContent
