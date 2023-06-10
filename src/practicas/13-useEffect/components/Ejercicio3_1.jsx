import {useEffect} from 'react'

export default function Ejercicio3_1({value}) {
  useEffect(() => {
    if (value) {
      console.log(`buscando datos en api.github.com/users/${value}`)
    }
  }, [value])

  return <h1>{value}</h1>
}
