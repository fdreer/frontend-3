import {useState} from 'react'
export default function Clase9() {
  const [values, setValues] = useState({number: '', name: ''})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(e) {
    setValues({...values, [e.target.id]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    const {number, name} = values

    if (isNaN(Number(number))) {
      setError('No se permiten letras')
      return
    }

    if (number < 0) {
      setError('No se permiten numeros negativos')
      return
    }

    if (name === '' || number === '') {
      setError('No se permiten campos vacios')
      return
    }

    const regex = /^[a-zA-Z]+$/
    if (name.match(regex) === null) {
      setError('No se permiten caracteres especiales')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <>
      <h1>Clase 9 - Formularios</h1>
      <form
        onSubmit={handleSubmit}
        style={{display: 'flex', flexDirection: 'column', width: '50%'}}
      >
        <label htmlFor="number">Numero:</label>
        <input type="text" id="number" onChange={handleChange} />
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Tu numero favorito es: {values.number}</p>}
      {isSubmitted && <p>Tu nombre es: {values.name}</p>}

      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  )
}
