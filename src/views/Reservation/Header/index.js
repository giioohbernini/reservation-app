import React from 'react'

import crown from './assets/crown.svg'
import style from './Header.sass'

const Header = () => (
  <section className={style.header}>
    <nav className={style.header_bar}>
      <ul>
        <li className={style.menuitem}>The Queen city</li>
        <li className={style.menuitem}>My Reservations</li>
        <li className={style.menuitem}>Guide</li>
        <li className={style._mobile}>☰</li>
      </ul>
    </nav>
    <div className={style.header_content}>
      <div className={style.wrapper}>
        <img className={style.crown} src={crown} alt='crown image' />
        <h2>welcome to</h2>
        <h1>Charlotte</h1>
        <h2>the queen city</h2>
      </div>
    </div>
  </section>
)

export default Header
