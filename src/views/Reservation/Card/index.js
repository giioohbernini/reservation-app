import React from 'react'
import Button from 'components/Button'

import style from './Card.sass'

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.left}>
        <img src='http://www.raphaelfabeni.com.br/rv/test-resources/hotels/super-8.jpg' alt='hotel image' />
      </div>
      <div className={style.middle}>
        <div className={style.stars}></div>
        <div className={style.title}>
          <h2>Hyatt Place Charlotte Airport/Lake Pointe </h2>
        </div>
        <div className={style.bio}>
          <p>This hotel is located 7 miles from downtown Charlotte and 5 miles from Charlotte Douglas International Airport.</p>
        </div>
        <div className={style.buttons}>
          <Button color='green'>Book now</Button>
          <Button color='orange'>Price history</Button>
        </div>
      </div>
      <div className={style.right}>
        <span className={style.title}>Total</span>
        <span className={style.price}>$670</span>
      </div>
    </div>
  )
}

export default Card
