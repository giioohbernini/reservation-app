const highPriced = (array) => {
  const price = array.reduce((acc, item) => {
    acc = item.total > acc ? item.total : acc
    return acc
  }, 0)

  return Math.round(price)
}

export default highPriced
