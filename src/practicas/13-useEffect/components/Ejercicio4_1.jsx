import {useEffect, useState} from 'react'

export default function Ejercicio4_1({cancel}) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    console.log('procesando pedido')

    let timer
    timer = setTimeout(() => {
      setIsConfirmed(true)
      console.log('pedido procesado')
    }, 2000)

    return () => {
      console.log('pedido cancelado...')
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      {isConfirmed ? <p>Pedido Listo!!!</p> : <p>Procesando pedido...</p>}
      <button onClick={cancel}>Cancelar pedido</button>
    </>
  )
}
