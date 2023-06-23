import {useState} from 'react'
import {createContext} from 'react'

// Se crea el contexto
export const ListContext = createContext()

export function ListTaskProvider(props) {
  const [tasks, setTasks] = useState([])

  // TODO LA LOGICA...
  const addTask = task => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        description: task,
        complete: false,
      },
    ])
  }

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const completeTask = id => {
    const otherTasks = tasks.filter(task => task.id !== id)
    const taskToEdit = tasks.find(task => task.id === id)
    taskToEdit.complete = !taskToEdit.complete
    const newTasks = [...otherTasks, taskToEdit]
    setTasks(newTasks)
  }

  // Se retorna el estado del context y la logica
  const value = {tasks, addTask, completeTask, deleteTask}

  // Se retorna el contexto
  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  )
}
