import { useRef, useState } from 'react'
import './Name.css'

const Name = () => {
  const inputRef = useRef(null)
  const formRef = useRef(null)
  const [name, setName] = useState('Max')

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
    </div>
  )
}
export default Name