import {useEffect} from 'react'

export default function Ejercicio2_1() {
  useEffect(() => {
    console.log('Activo')

    return () => {
      console.log('Desactivo')
    }
  }, [])
  return <p>Activo</p>
}
