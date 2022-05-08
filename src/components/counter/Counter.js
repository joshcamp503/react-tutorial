import { useState } from 'react'
import './Counter.css'
import CounterButtons from './CounterButtons'

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
      <CounterButtons count={count} increment={increment} decrement={decrement} />
    </div>
  )
}
export default Counter