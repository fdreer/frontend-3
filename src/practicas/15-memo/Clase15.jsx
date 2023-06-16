import {useMemo, useState} from 'react'
import Products from './components/Products'
import Books from './components/Books'

const Clase15 = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  // Se recalcula cuando cambia el valor de value1 y value2
  const sumaValue1Value2 = useMemo(() => {
    console.log('Calculando sumaValue1Value2')
    return value1 + value2
  }, [value1, value2])

  return (
    <>
      <h2>Ejercicio 1</h2>
      <input
        type="number"
        value={value1}
        onChange={e => setValue1(Number(e.target.value))}
      />
      <input
        type="number"
        value={value2}
        onChange={e => setValue2(Number(e.target.value))}
      />
      <input
        type="number"
        value={value3}
        onChange={e => setValue3(Number(e.target.value))}
      />
      <span>Value 1 + Value 2 = {sumaValue1Value2}</span>
      <Products />
      <Books />
    </>
  )
}

export default Clase15
