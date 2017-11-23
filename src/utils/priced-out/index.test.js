import { expect } from 'chai'
import PricedOut from './index'

it('PricedOut should be a function', () => {
  expect(PricedOut).to.be.a('function')
})

it('PricedOut should return { high: 10, low: 2 }', () => {
  const before = [
    { total: 10 },
    { total: 5 },
    { total: 3 },
    { total: 8 },
    { total: 2 }
  ]
  const after = {
    high: 10,
    low: 2
  }

  expect(PricedOut(before)).to.be.deep.equal(after)
})
