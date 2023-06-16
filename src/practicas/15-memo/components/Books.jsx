import {useEffect, useMemo, useState} from 'react'
import data from '../../../fakeApi/books.json'

function Books(params) {
  const [selectOption, setSelectOption] = useState('')
  const [selectedBooks, setSelectedBooks] = useState([])

  useEffect(() => {
    console.log('useEffect')

    setSelectedBooks(data.filter(book => book.planeta === selectOption))
  }, [selectOption])

  // No entiendo la diferencia entre aplicar el useEffect y el useMemo en este caso

  //   const selectedBooks = useMemo(() => {
  //     console.log('Ejecutando selectedBooks')
  //     return data.filter(book => book.planeta === selectOption)
  //   }, [selectOption])

  return (
    <>
      <h2>Ejercicio 3</h2>
      <select onChange={e => setSelectOption(e.target.value)}>
        <option value="Roshar">Roshar</option>
        <option value="Skadrial">Skadrial</option>
        <option value="Nalthis">Nalthis</option>
        <option value="Threnody">Threnody</option>
      </select>
      <ul>
        {selectedBooks.map(book => (
          <li key={book.id}>{book.nombre}</li>
        ))}
      </ul>
    </>
  )
}
export default Books
