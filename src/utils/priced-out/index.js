const PricedOut = (array) => {
  const high = array.reduce((acc, item) => {
    acc = item.total > acc ? item.total : acc
    return acc
  }, 0)

  const low = array.reduce((acc, item) => {
    acc = item.total < acc ? item.total : acc
    return acc
  }, high)

  return {
    high: Math.round(high),
    low: Math.round(low)
  }
}

export default PricedOut
