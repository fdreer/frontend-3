import {useEffect, useState} from 'react'
import Ejercicio2_1 from './Ejercicio2_1'

export default function Ejercicio2() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {})
  return (
    <>
      <h2>Ejercicio 2</h2>
      <button onClick={() => setIsActive(!isActive)}>setIsActive</button>
      {isActive && <Ejercicio2_1 />}
    </>
  )
}
