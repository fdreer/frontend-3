import {useState} from 'react'
import Ejercicio3_1 from './Ejercicio3_1'
export default function Ejercicio3() {
  const [inputValue, setInputValue] = useState('')
  const [submitedValue, setSubmitedValue] = useState('')
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => setSubmitedValue(inputValue)}>Submit</button>
      <Ejercicio3_1 value={submitedValue} />
    </div>
  )
}
