import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import style from './Tooltip.sass'

let cx = classNames.bind(style)

const Tooltip = ({ children, text, type }) => {
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

Tooltip.defaultProps = {
  type: 'top'
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Tooltip
