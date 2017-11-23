import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import style from './button.sass'

let cx = classNames.bind(style)

const Button = ({ children, color, borderSize = 1, onClick }) => {
  const className = cx({
    btn: true,
    [`_${color}`]: true,
    [`_border${borderSize}`]: true
  })

  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

Button.defaultProps = {
  color: 'green',
  borderSize: 1,
  onClick: () => console.log('Empty Callback')
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  borderSize: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default Button
