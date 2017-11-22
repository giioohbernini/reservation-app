import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const dayClass = (value, month, checkin, checkout, style) => {
  const cx = classNames.bind(style)
  const day = value + 1
  const isCurrentMonth = (check) => month === check.monthSelected

  const isDiferentSelectedMonth = () =>
    (checkin.monthSelected !== checkout.monthSelected)

  const hasFullMonthActive = () =>
    (month > checkin.monthSelected && month < checkout.monthSelected)

  const isBetweenAndSameMonth = () =>
    (day > checkin.key && day < checkout.key && isCurrentMonth(checkin) && isCurrentMonth(checkout))

  const lessThan = () =>
    (isDiferentSelectedMonth() && isCurrentMonth(checkout) && day < checkout.key)

  const moreThan = () =>
    (isDiferentSelectedMonth() && isCurrentMonth(checkin) && day > checkin.key)

  const isActive = () => (
    isBetweenAndSameMonth() ||
    lessThan() ||
    moreThan() ||
    hasFullMonthActive()
      ? cx('day', '_active')
      : false
  )

  const isFirstActive = () => day === checkin.key && isCurrentMonth(checkin)
    ? cx('day', '_firstactive')
    : false

  const isLastActive = () => day === checkout.key && isCurrentMonth(checkout)
    ? cx('day', '_lastactive')
    : false

  const isSmallDate = () => (
    day < checkin.key &&
    isCurrentMonth(checkin) &&
    !checkout.status
      ? cx('day', '_smalldate')
      : false
  )

  const defaultActive = cx('day')

  return (
    isActive() ||
    isFirstActive() ||
    isLastActive() ||
    isSmallDate() ||
    defaultActive
  )
}

dayClass.propTypes = {
  checkin: PropTypes.object.isRequired,
  checkout: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  month: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default dayClass
