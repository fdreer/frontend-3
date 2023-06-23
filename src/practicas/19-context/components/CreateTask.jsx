import {useContext, useState} from 'react'
import {ListContext} from '../contexts/ListTaskContext'

function CreateTaskForm() {
  const tasksContext = useContext(ListContext)
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    tasksContext.addTask(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Tarea:</label>
      <input
        onChange={handleChange}
        type="text"
        id="description"
        placeholder="Escribe tu tarea"
      />
      <button type="submit">Crear</button>
    </form>
  )
}
export default CreateTaskForm
