import { useState } from 'react'
import { useMode } from '../../hooks/useMode'

const CounterButtons = ({ count, increment, decrement }) => {
  const { countArray, updateArray, decrementArray } = useMode()

  const handleClick = () => {
    let localCount = count
    localCount++
    updateArray(countArray, localCount)
    increment()
  }

  const handleDecrement = () => {
    let localCount = count
    localCount--
    decrementArray(countArray, localCount)
    decrement()
  }

  return (
    <div className="counter">
      <button className="minus" onClick={handleDecrement}>-</button>
      <div className="count">{count}</div>
      <button className="plus" onClick={handleClick}>+</button>
    </div>
  )
}

export default CounterButtons