import React from 'react'

import classNames from 'classnames/bind'
import style from './Tooltip.sass'

let cx = classNames.bind(style)

const Tooltip = ({ children, text, type = 'top' }) => {
  const className = cx({
    tooltiptext: true,
    [`_${type}`]: true
  })
  return (
    <div className={style.tooltip}>
      {children}
      <span className={className}>{text}</span>
    </div>
  )
}

export default Tooltip
