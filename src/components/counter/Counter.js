import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    let newCount = count
    newCount++
    setCount(newCount)
  }

  const decrement = () => {
    let newCount = count
    newCount--
    setCount(newCount)
  }

  return (
    <div className='counter'>
      <button className="minus" onClick={decrement}>-</button>
      <div className="count">{count}</div>
      <button className="plus" onClick={increment}>+</button>
    </div>
  )
}
export default Counter