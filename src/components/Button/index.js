import React from 'react'

import classNames from 'classnames/bind'
import style from './button.sass'

let cx = classNames.bind(style)

const Button = ({ children, color = 'green', borderSize = 1, onClick }) => {
  const className = cx({
    btn: true,
    [`_${color}`]: true,
    [`_border${borderSize}`]: true
  })

  return (
    <button onClick={onClick || console.log('Nenhuma ação configurada')} className={className}>{children}</button>
  )
}

export default Button
