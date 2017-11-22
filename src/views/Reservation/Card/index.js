import React from 'react'
import Button from 'components/Button'
import starOutline from './assets/star-outline.svg'
import starFilled from './assets/star-filled.svg'

import style from './Card.sass'

const GraphCard = ({ index, priceHistory, handlePriceHistory }) => {
  return (
    <div className={style.card}>
      <div className='history_header'>
        <div className='left'>
          <h3>Price history 2017</h3>
        </div>
        <div className='right'>
          <span onClick={handlePriceHistory(index)}>back to description</span>
        </div>
      </div>
      <div className='history_graph'></div>
    </div>
  )
}

const DescriptionCard = ({
  index,
  price,
  rate,
  image,
  description,
  name,
  total,
  showHistory,
  priceHistory,
  handleBookNow,
  handlePriceHistory
}) => {
  return (
    <div className={style.card}>
      <div className={style.left}>
        <img className={style.image} src={image} alt='hotel image' />
      </div>
      <div className={style.middle}>
        <div className={style.stars}>
          {Array.apply(null, Array(5)).map((item, index) => index < rate
            ? <img key={index} className={style.star} src={starFilled} alt='star icon' />
            : <img key={index} className={style.star} src={starOutline} alt='star icon' />
          )}
        </div>
        <div className={style.header}>
          <h2 className={style.title}>{name}</h2>
          <p className={style.hiddenPrice}>Total: <span>${Math.round(total)}</span></p>
        </div>
        <div className={style.bio}>
          <p>{description}</p>
        </div>
        <div className={style.buttons}>
          <Button onClick={handleBookNow} color='orange'>Book now</Button>
          <Button onClick={handlePriceHistory(index)} color='green'>Price History</Button>
        </div>
      </div>
      <div className={style.right}>
        <span className={style.title}>Total</span>
        <span className={style.price}>${Math.round(total)}</span>
      </div>
    </div>
  )
}

const Card = ({ showHistory, ...props }) => {
  return showHistory
    ? <GraphCard {...props} />
    : <DescriptionCard {...props} />
}

export default Card
