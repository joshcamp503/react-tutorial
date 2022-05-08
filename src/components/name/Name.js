// STYLES
import './Name.css'

// HOOKS
import { useRef, useState, useEffect } from 'react'
import { useMode } from '../../hooks/useMode'

const Name = () => {
  const inputRef = useRef(null)
  const formRef = useRef(null)

  const [name, setName] = useState('Josh')

  const { countArray } = useMode()

  useEffect(() => {
    // console.log(`name is ${name}`)
  }, [name])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(inputRef.current.value)
    formRef.current.reset()
  }

  return (
    <div className="name">
      <h3 className="title">Name: {name}</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" ref={inputRef}/>
        <button>Submit</button>
      </form>
      {countArray.map(num => (
        <p key={num} >{num}</p>
      ))}
    </div>
  )
}
export default Name