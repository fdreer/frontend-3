import {useState} from 'react'
import {useSearchParams} from 'react-router-dom'

function Form() {
  const [formValues, setFormValues] = useState()

  const [, setSearchParams] = useSearchParams()

  function handleChange(e) {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSearchParams(formValues)
  }
  return (
    <form onSubmit={handleSubmit}>
      <select name="genero" onChange={handleChange}>
        <option> --- </option>
        <option>Roguelike</option>
        <option>Platformer</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Puzzle</option>
        <option>Metroidvania</option>
        <option>Simulation</option>
        <option>Board</option>
        <option>Precision</option>
      </select>

      <label htmlFor="min-played">Min played Time</label>
      <input
        onChange={handleChange}
        name="minPlayed"
        type="text"
        id="min-played"
      />

      <button type="submit">Buscar</button>
    </form>
  )
}
export default Form
