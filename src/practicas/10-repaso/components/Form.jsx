import {useState} from 'react'
import getId from '../utils/getId'
function Form({agregarPedido}) {
  const [plato, setPlato] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (plato.trim() === '') {
      setError('No puede haber campos vacios')
      return
    }

    if (!isNaN(plato)) {
      setError('No puede haber numeros')
      return
    }

    setError(false)
    agregarPedido({
      id: getId(),
      name: plato.toUpperCase(),
    })
  }

  const handleChange = e => {
    setPlato(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '400px',
        margin: '0 auto',
      }}
    >
      <h2 style={{margin: '0', padding: '0'}}>Hace tu pedido:</h2>
      <input
        type="text"
        id="plato"
        name="plato"
        placeholder="Hamburguesa..."
        onChange={handleChange}
        style={{
          padding: '15px',
        }}
      />

      {error && <span style={{color: 'red'}}>{error}</span>}
      <button type="submit" style={{width: '50%', margin: '0 auto'}}>
        Finalizar pedido
      </button>
    </form>
  )
}

export default Form
