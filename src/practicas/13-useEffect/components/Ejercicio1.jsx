import {useEffect} from 'react'

export default function Ejercicio1() {
  useEffect(() => {
    console.log('Ejercicio 1 log')
  }, [])

  return (
    <div>
      <h2>Ejercicio 1</h2>
    </div>
  )
}
