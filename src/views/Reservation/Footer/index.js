import React from 'react'

import fbIcon from './assets/facebook.svg'
import twIcon from './assets/twitter.svg'
import instaIcon from './assets/instagram.svg'

import style from './Footer.sass'

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer_content}>
      <div className={style.icons}>
        <img className={style.icon} src={fbIcon} alt='facebook icon' />
        <img className={style.icon} src={twIcon} alt='twitter icon' />
        <img className={style.icon} src={instaIcon} alt='instagram icon' />
      </div>
      <p className={style.copyright}>© 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</p>
    </div>
  </footer>
)

export default Footer
