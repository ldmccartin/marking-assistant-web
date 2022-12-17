import { calculatePercentage } from './calculatePercentage'

describe('calculatePercentage', () => {
  it('verify percentage calculation function with rounding', () => {
    expect(calculatePercentage(100, 100)).toEqual(100)
    expect(calculatePercentage(50, 100)).toEqual(50)
    expect(calculatePercentage(100, 50)).toEqual(200)
    expect(calculatePercentage(1, 100)).toEqual(1)
    expect(calculatePercentage(12.5, 100)).toEqual(13)
    expect(calculatePercentage(49.75, 100)).toEqual(50)
  })
})

