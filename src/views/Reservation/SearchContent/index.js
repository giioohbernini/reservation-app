import React, { Component } from 'react'
import Card from '../Card'
import starOutline from '../Card/assets/star-outline.svg'
import starFilled from '../Card/assets/star-filled.svg'

import style from './SearchContent.sass'

class SearchContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchedHotels: props.hotels,
      rangeValue: 100,
      rate: 0
    }

    this.handleRangeChange = e => {
      this.setState({
        ...this.state,
        rangeValue: e.target.value
      })
    }

    this.handleStarChange = e => {
      const rate = parseInt(e.target.attributes.value.value) + 1

      const searchedHotels = this.props.hotels.filter(item => {
        if (item.rate === rate) return item
      })

      this.setState({
        ...this.state,
        rate,
        searchedHotels
      })
    }

    this.handleBookNow = () => {

    }

    this.handlePriceHistory = () => {

    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.hotels !== this.state.searchedHotels) {
      this.setState({
        ...this.state,
        searchedHotels: nextProps.hotels
      })
    }
  }

  componentWillUnmount () {
    console.log('vai desmontar')
    this.setState({
      ...this.state,
      rate: 0
    })
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
                <div className={style.content}>
                  {Array.apply(null, Array(5)).map((item, index) => index < this.state.rate
                    ? <img onClick={this.handleStarChange} value={index} key={index} className={style.star} src={starFilled} alt='star icon' />
                    : <img onClick={this.handleStarChange} value={index} key={index} className={style.star} src={starOutline} alt='star icon' />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={style.card_box}>
            {!this.state.searchedHotels.length
              ? <span className={style.error}>Sorry, we don't have hotels for your filter</span>
              : null
            }
            {this.state.searchedHotels.map((hotel, index) => (
              <Card
                key={index}
                price={hotel.price}
                rate={hotel.rate}
                image={hotel.image}
                name={hotel.name}
                total={hotel.total}
                description={hotel.description}
                handleBookNow={this.handleBookNow}
                handlePriceHistory={this.handlePriceHistory}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchContent
