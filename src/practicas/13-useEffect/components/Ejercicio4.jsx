import {useState} from 'react'
import Ejercicio4_1 from './Ejercicio4_1'
export default function Ejercicio4() {
  const [inProgress, setInProgress] = useState(false)
  return (
    <>
      {!inProgress ? (
        <button onClick={() => setInProgress(true)}>Hacer pedido</button>
      ) : (
        <Ejercicio4_1 cancel={() => setInProgress(false)} />
      )}
    </>
  )
}
